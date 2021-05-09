import React, { useState, Fragment } from "react";
import { useTracker } from "meteor/react-meteor-data";
import { Link } from "react-router-dom";

import "./styles.css";
import { MenuSvg } from "./svg/menu";

const SiderBar = () => {
  const [showSide, setShowSide] = useState(false);

  useTracker(() => {
    const user = Meteor.user();

    setTimeout(() => {
      setShowSide(!!user);
    }, 0);
  });

  return (
    <div className="main">
      {showSide ? (
        <Fragment>
          <nav id="sidebar">
            <div className="sidebar-header">
              <h3>
                Lista de opções
                <span
                  className="sidebar-menu-svg-close"
                  onClick={() => setShowSide(false)}
                >
                  {MenuSvg}
                </span>
              </h3>
            </div>

            <ul>
              <li className="active">
                <a
                  href="#homeSubmenu"
                  data-toggle="collapse"
                  aria-expanded="false"
                  className="dropdown-toggle"
                >
                  Home
                </a>
                <ul className="collapse list-unstyled" id="homeSubmenu">
                  <li>
                    <a href="#">Home 1</a>
                  </li>
                  <li>
                    <a href="#">Home 2</a>
                  </li>
                  <li>
                    <a href="#">Home 3</a>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/profile">Perfil </Link>
              </li>

              <li className="active">
                <a
                  href="#homeSubmenu"
                  data-toggle="collapse"
                  aria-expanded="false"
                  className="dropdown-toggle"
                >
                  Professor
                </a>
                <ul className="collapse list-unstyled" id="homeSubmenu">
                  <li>
                    <a href="#">Classes</a>
                  </li>
                  <li>
                    <a href="#">Alunos</a>
                  </li>
                  <li>
                    <a href="#">Pagamentos</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Histórico de Aulas</a>
              </li>
              <li>
                <Link to="/messages">
                  Minhas Mensagens <span className="badge badge-light">2</span>
                </Link>
              </li>
              <li>
                <a href="#">Configurações</a>
              </li>
              <li>
                <a href="#">Sair</a>
              </li>
            </ul>
          </nav>
        </Fragment>
      ) : (
        ""
      )}
    </div>
  );
};

export default SiderBar;
