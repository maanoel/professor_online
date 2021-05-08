import React, { useState, Fragment } from "react";
import { useTracker } from "meteor/react-meteor-data";
import PageHeader from "../../components/PageHeader";
import SiderBar from "../../components/SiderBar";

import "./styles.css";

const MessagesList = () => {
  const [showSide, setShowSide] = useState(false);
  const [showChat, setShowChat] = useState(false);

  useTracker(() => {
    const user = Meteor.user();

    setTimeout(() => {
      setShowSide(!!user);
    }, 0);
  });

  openChat = () => {
    alert(1);
  };

  return (
    <div id="page-teacher-list" className="contaienr">
      <SiderBar />
      {showChat ? <Chat userId={userId} closeChat={closeChat} /> : ""}
      <PageHeader title="Aqui você ler as mensagens que te enviaram"></PageHeader>
      <main>
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="Avatar"
              className="message-list-img"
            />
            <button type="button" class="btn btn-primary btn-lg">
              Abrir Conversa
            </button>

            <span className="badge badge-primary badge-pill">14</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="Avatar"
              className="message-list-img"
            />
            <span className="badge badge-primary badge-pill">2</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="Avatar"
              className="message-list-img"
            />
            <span className="badge badge-primary badge-pill">1</span>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default MessagesList;
