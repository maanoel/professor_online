import React from "react";
import "./styles.css";

const MessageItem = ({ onClick, userOrigin, dateMessage }) => {
  return (
    <article className="teacher-item">
      <footer>
        <img className="rounded-circle" src="https://i.imgur.com/O1RmJXT.jpg" />
        <p>
          Horário da última mensagem
          <strong>{dateMessage}</strong>
        </p>
        <a
          onClick={() => {
            onClick(userOrigin);
          }}
          href="#"
        >
          <img src="https://i.ibb.co/3yRqZd4/whatsapp.png" alt="Chat" />
          Conversar
        </a>
      </footer>
    </article>
  );
};

export default MessageItem;
