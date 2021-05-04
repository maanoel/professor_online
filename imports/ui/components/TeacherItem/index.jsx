import React from "react";

import "./styles.css";

const TeacherItem = ({ teacher }) => {
  function handleCreateNewConnection() {}

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
        <a
          onClick={handleCreateNewConnection}
          href={`https://wa.me/${teacher.whatsapp}`}
          target="_blank"
        >
          <img src="https://i.ibb.co/3yRqZd4/whatsapp.png" alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
