import React from "react";
import { Link } from "react-router-dom";
import ChatSvg from '../../../../public/images/icons/chatsvg' 
import VideoSvg from '../../../../public/images/icons/videosvg' 
import CommentSvg from '../../../../public/images/icons/commentsvg' 

import "./styles.css";

const TeacherItem = ({ teacher, onClickVideo, onClickChat }) => {
  return (
    <article className="default-item">
      <header >
        <img src="https://i.imgur.com/O1RmJXT.jpg"  alt={teacher.name} />
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
        <a onClick={onClickChat} href="#" >
          <span dangerouslySetInnerHTML={{__html: ChatSvg}} alt="chat"></span>
          Conversar
        </a>
        <a onClick={onClickVideo} href="#" >
          <span dangerouslySetInnerHTML={{__html: VideoSvg}} alt="video"></span>
          Chamada de vídeo
        </a>
          <Link to="/comments-list">
            <span dangerouslySetInnerHTML={{__html: CommentSvg}} alt="comentários"></span>
            Comentar
          </Link>
      </footer>
    </article>
  );
};

export default TeacherItem;
