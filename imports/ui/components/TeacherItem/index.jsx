import React from "react";
import "./styles.css";

const TeacherItem = ({ teacher, onClick }) => {
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
        <a onClick={onClick} href="#">
          <img src="https://i.ibb.co/3yRqZd4/whatsapp.png" alt="Chat" />
          Iniciar uma conversa
        </a>
        <a onClick={onClick} href="#">
          <img src="https://img.icons8.com/small/20/000000/video-message.png" alt="Vídeo" />
          Iniciar chamada de Vídeo
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
