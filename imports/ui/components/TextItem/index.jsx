import React from "react";
import "./styles.css";

const TextItem = ({ title, text }) => {
  return (
    <article className="text-item-annotation">
      <div className="list-group">
        <a
          href="#"
          class="list-group-item list-group-item-action flex-column align-items-start active"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{title}</h5>
            <small>3 days ago</small>
          </div>
          <p className="mb-1">{text}</p>
          <small>Clique para abrir a anotação</small>
        </a>
      </div>
    </article>
  );
};

export default TextItem;
