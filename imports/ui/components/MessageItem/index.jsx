import React from "react";
import moment from 'moment';
import "./styles.css";

const MessageItem = ({ onClick, userOrigin, dateMessage }) => {

  dateMessage =  moment(dateMessage, 'YYYY-MM-DD hh:mm:ss').format('DD/MM/YYYY hh:mm:ss');

  return (
    <article className="default-item">
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
