import React from "react";
import "./styles.css";

const MessageItem = ({ obj, onClick, userOrigin }) => {
  return (
    <article className="teacher-item">
      <footer>
        {/* <img src={obj.avatar} alt={obj.name} /> */}
        <p>
          Horário da última mensagem
          <strong>08/05/2021 11:00</strong>
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
