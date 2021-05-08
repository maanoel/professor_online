import React, { useState, useEffect } from "react";

import "./styles.css";
import { Link } from "react-router-dom";

const Landing = () => {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {}, []);

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src="https://i.ibb.co/KrNtNX4/logo.png" alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img
          src="https://i.ibb.co/CznjS0k/landing.png"
          alt="Plataforma de estudos"
          className="hero-image"
        />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src="https://i.ibb.co/sP6dNHz/study.png" alt="Estudar" />
            Estudar
          </Link>

          <Link to="/login" className="give-classes">
            <img
              src="https://i.ibb.co/sRqgWZc/give-classes.png"
              alt="Dar aulas"
            />
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de {totalConnections} conexões já realizadas
          <img
            src="https://i.ibb.co/J59mcVM/purple-heart.png"
            alt="Coração roxo"
          />
        </span>
      </div>
    </div>
  );
};

export default Landing;
