import React, { useState } from "react";
import { useTracker } from "meteor/react-meteor-data";
import { ChatMessageCollection } from "../../../db/ChatMessageCollection";

import "./styles.css";

const Chat = ({ closeChat }) => {
  const [message, setMessage] = useState("");
  const [showChat, setShowChat] = useState(true);

  let messages = "";
  useTracker(() => {
    Meteor.subscribe("chatmessages");
    messages = ChatMessageCollection.find({}).fetch();
  });

  const sendMessage = () => {
    const userLogado = Meteor.user();

    Meteor.call(
      "chatmessages.insert",
      {
        message: message,
        user_destiny: userLogado._id,
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

  return (
    <div className="chat chat_support" id="chat_help">
      <div className="in_support_header">
        <span>Nadigne gubert</span>
        <div className="icon_close" onClick={() => closeChat()}>
          <img src="https://i.ibb.co/3TpDQ3y/close.png" />
        </div>
      </div>
      <div className="text_support text_help">
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
