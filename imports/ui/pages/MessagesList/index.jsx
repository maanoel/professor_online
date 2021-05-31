import React, { useState, useEffect } from "react";
import { useTracker } from "meteor/react-meteor-data";
import { ChatCollection } from "../../../db/ChatCollection";
import PageHeader from "../../components/PageHeader";
import SiderBar from "../../components/SiderBar";
import Chat from "../../components/Chat";
import MessageItem from "../../components/MessageItem";
import { useHistory } from "react-router-dom";
import "./styles.css";

const MessagesList = () => {
  const [showSide, setShowSide] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [userId, setUserId] = useState(0);
  const user = useTracker(() => Meteor.user());
  const chats = useTracker(() => {
    const history = useHistory();
    if (!Meteor.userId()) {
      history.push("/login");
      return [];
    }

    Meteor.subscribe("chats");

    return ChatCollection.find(
      {
        user_destiny: Meteor.userId(),
      },
      { sort: { last_message: -1 } }
    ).fetch();
  });

  function handlerClickChat(user_id) {
    setUserId(user_id);
    setShowChat(true);
  }

  function closeChat() {
    setShowChat(!showChat);
  }

  return (
    <div id="page-teacher-list">
      <SiderBar />
      {showChat ? (
        <Chat
          userId={userId}
          closeChat={() => {
            closeChat();
          }}
        />
      ) : (
        ""
      )}
      <PageHeader title="Aqui você ler as mensagens que te enviaram"></PageHeader>
      <main>
        {chats.map((chat) => (
          <MessageItem
            userOrigin={chat.user_origin}
            key={chat._id}
            dateMessage={chat.last_message.toString()}
            onClick={(user_id) => {
              handlerClickChat(user_id);
            }}
          />
        ))}
      </main>
    </div>
  );
};

export default MessagesList;
