import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const PageHeader = ({ title, description, children }) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src="https://i.ibb.co/6DyjXsD/back.png" alt="Voltar" />
        </Link>

        <img src="https://i.ibb.co/KrNtNX4/logo.png" alt="Proffy" />
      </div>

      <div className="header-content">
        <strong>{title}</strong>

        {description && <p>{description}</p>}

        {children}
      </div>
    </header>
  );
};

export default PageHeader;
