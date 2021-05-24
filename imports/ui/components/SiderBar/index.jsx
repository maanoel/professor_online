import React, { Fragment } from "react";
import { useTracker } from "meteor/react-meteor-data";
import { Link } from "react-router-dom";
import { MenuSvg } from "./svg/menu";
import "./styles.css";

const SiderBar = () => {
  const logout = () => Meteor.logout();

  const showSide = useTracker(() => {
    const user = !!Meteor.userId();
    return user;
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
                    <a href="#">Sobre o proffy</a>
                  </li>
                  <li>
                    <a href="#">Como ser um professor</a>
                  </li>
                  <li>
                    <Link to="/About">Sobre nós</Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/profile">Perfil </Link>
              </li>

              <li>
                <Link to="/study">Estudar</Link>
              </li>

              <li className="active">
                <a
                  href="#teacherSubmenu"
                  data-toggle="collapse"
                  aria-expanded="false"
                  className="dropdown-toggle"
                >
                  Professor
                </a>
                <ul className="collapse list-unstyled" id="teacherSubmenu">
                  <li>
                    <Link to="/give-classes">Criar Classe</Link>
                  </li>
                  <li>
                    <Link to="/classes">Classes</Link>
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
                <Link to="/annotations-list">Anotações</Link>
              </li>
              <li>
                <Link to="/messages">
                  Mensagens <span className="badge badge-light">2</span>
                </Link>
              </li>
              <li>
                <a href="#">Configurações</a>
              </li>

              <li>
                <Link to="/login" onClick={() => logout()}>
                  Sair
                </Link>
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
