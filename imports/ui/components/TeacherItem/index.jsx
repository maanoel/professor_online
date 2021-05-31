import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const TeacherItem = ({ teacher, onClickVideo, onClickChat }) => {
  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {teacher.cost}</strong>
        </p>
        <a onClick={onClickChat} href="#" className="button1">
          <img src="https://i.ibb.co/3yRqZd4/whatsapp.png" alt="Chat" />
          Iniciar uma conversa
        </a>
        <a onClick={onClickVideo} href="#" className="button2">
          <img
            src="https://img.icons8.com/small/20/000000/video-message.png"
            alt="Vídeo"
          />
          Iniciar chamada de Vídeo
        </a>
        <a href="comments-list" className="button3">
          <img
            src="https://img.icons8.com/fluent-systems-regular/20/000000/comments--v2.png"
            alt="Comentários"
          />
          <Link to="/comments-list">Fazer um comentário</Link>
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
