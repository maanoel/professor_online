import React, { useState } from "react";
import { useTracker } from "meteor/react-meteor-data";
import { ChatMessageCollection } from "../../../db/ChatMessageCollection";

import "./styles.css";

const Chat = ({ closeChat, userId }) => {
  const [message, setMessage] = useState("");

  const messages = useTracker(() => {
    let user = Meteor.user();
    if (!user) return;

    Meteor.subscribe("chatmessages");

    return ChatMessageCollection.find(
      {
        $or: [
          { $and: [{ user_origin: user._id }, { user_destiny: userId }] },
          { $and: [{ user_origin: userId }, { user_destiny: user._id }] },
        ],
      },
      { sort: { last_message: -1 } }
    ).fetch();
  });

  const sendMessage = () => {
    if (!message || (message && message.trim().length == 0)) return;
    setMessage("");

    const userLogado = Meteor.user();
    Meteor.call(
      "chatmessages.insert",
      {
        message: message,
        user_destiny: userId,
        user_origin: userLogado._id,
        name_user_send: userLogado.username,
      },
      (error, id) => {
        if (error) {
          alert(error);
        } else {
        }
      }
    );
  };

  scrollIntoView = (e) => {
    e.scrollIntoView();
  };

  return (
    <div className="chat chat_support" id="chat_help">
      <div className="in_support_header">
        <span>Nadigne gubert</span>
        <div className="icon_close" onClick={() => closeChat()}>
          <img src="https://i.ibb.co/3TpDQ3y/close.png" />
        </div>
      </div>
      <div className="text_support">
        <div className="text_help">
          <span>Conversa com Nadine Gubert</span>
          {messages.map((message) => (
            <div>
              <span>{message.name_user_send}</span>
              <p key={message._id} name="txt_help">
                {message.message}
              </p>
            </div>
          ))}
        </div>
        <div className="chat-mensagem">
          <span>Digite sua mensagem</span>
          <input
            type="text"
            id="email"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div className="button">
          <button
            className="btn_start_chat"
            id="start_chat"
            onClick={() => sendMessage()}
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
