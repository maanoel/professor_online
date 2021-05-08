import React, { useState } from "react";
import { useTracker } from "meteor/react-meteor-data";
import PageHeader from "../../components/PageHeader";
import SiderBar from "../../components/SiderBar";
import { ChatCollection } from "../../../db/ChatCollection";
import Chat from "../../components/Chat";

import "./styles.css";

const MessagesList = () => {
  const [showSide, setShowSide] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [chats, setChats] = useState([]);
  const [userId, setUserId] = useState(0);

  useTracker(() => {
    const user = Meteor.user();
    if (!user) return;

    Meteor.subscribe("chats");

    const teste = setTimeout(() => {
      setChats(
        ChatCollection.find({
          user_destiny: user._id,
        }).fetch()
      );
      setShowSide(!!user);
    }, 0);
  });

  function handlerClickChat(user_id) {
    setUserId(user_id);
    setShowChat(true);
  }

  function closeChat() {
    setShowChat(!showChat);
  }

  return (
    <div id="page-teacher-list" className="contaienr">
      <SiderBar />
      {showChat ? <Chat userId={userId} closeChat={closeChat} /> : ""}
      <PageHeader title="Aqui você ler as mensagens que te enviaram"></PageHeader>
      <main>
        {chats.map((chat) => (
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <img
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt="Avatar"
                className="message-list-img"
              />
              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={() => {
                  handlerClickChat(chat.user_origin);
                }}
              >
                Abrir Conversa
              </button>
              <span className="badge badge-primary badge-pill">14</span>
            </li>
          </ul>
        ))}
      </main>
    </div>
  );
};

export default MessagesList;
