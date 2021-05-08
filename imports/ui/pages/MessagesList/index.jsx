import React, { useState } from "react";
import { useTracker } from "meteor/react-meteor-data";
import PageHeader from "../../components/PageHeader";
import SiderBar from "../../components/SiderBar";
import { ChatCollection } from "../../../db/ChatCollection";
import Chat from "../../components/Chat";
import MessageItem from "../../components/MessageItem";
import "./styles.css";

const MessagesList = () => {
  const [showSide, setShowSide] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [chats, setChats] = useState([]);
  const [userId, setUserId] = useState(0);

  const onClick = () => alert(1);

  useTracker(() => {
    const user = Meteor.user();

    if (!user) return;

    Meteor.subscribe("chats");

    setTimeout(() => {
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
    <div id="page-teacher-list" className="container">
      <SiderBar />
      {showChat ? <Chat userId={userId} closeChat={closeChat} /> : ""}
      <PageHeader title="Aqui você ler as mensagens que te enviaram"></PageHeader>
      <main>
        {chats.map((chat) => (
          <MessageItem
            userOrigin={chat.user_origin}
            obj={chat}
            onClick={handlerClickChat}
          />
        ))}
      </main>
    </div>
  );
};

export default MessagesList;
