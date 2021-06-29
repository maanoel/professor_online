import React from "react";
import { Link } from "react-router-dom";
import ChatSvg from "../../../../public/images/icons/chatsvg";
import VideoSvg from "../../../../public/images/icons/videosvg";
import CommentSvg from "../../../../public/images/icons/commentsvg";
import ModalConfirm from "../ModalConfirm";

import "./styles.css";

const TeacherItem = ({ teacher, onClickVideo, onClickChat }) => {
  return (
    <article className="default-item">
      <header>
        <img src="https://i.imgur.com/O1RmJXT.jpg" alt={teacher.name} />
        <div className="teacher-item-text">
          <strong>{teacher.title}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p className="teacher-item-text">{teacher.description}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {teacher.cost}</strong>
        </p>
        <a onClick={onClickChat} href="#">
          <span dangerouslySetInnerHTML={{ __html: ChatSvg }} alt="chat"></span>
          Conversar
        </a>
        <a href="#" data-toggle="modal" data-target="#modal">
          <span
            dangerouslySetInnerHTML={{ __html: VideoSvg }}
            alt="video"
          ></span>
          Chamada de vídeo
        </a>
        <Link to="/comments-list">
          <span
            dangerouslySetInnerHTML={{ __html: CommentSvg }}
            alt="comentários"
          ></span>
          Comentar
        </Link>
      </footer>

      <div
        className="modal fade"
        id="modal"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <ModalConfirm
          callBackConfirm={onClickVideo}
          modalTitle={"Iniciar aula"}
          modalBody={`O valor dessa aula é R$89 a hora.
           Após iniciar a chamada, você terá 5 minutos grátis para verificar o seu professor.`}
        />
      </div>
    </article>
  );
};

export default TeacherItem;
