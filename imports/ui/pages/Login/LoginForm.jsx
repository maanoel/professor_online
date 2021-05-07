import { Meteor } from "meteor/meteor";
import React, { useState } from "react";
import { useTracker } from "meteor/react-meteor-data";
import { useHistory } from "react-router-dom";

import "./styles.css";

export const LoginForm = () => {
  //https://preview.colorlib.com/theme/bootstrap/login-form-07/

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const goToNewUserPage = (e) => {
    history.push("new-user");
  };

  const submit = (e) => {
    e.preventDefault();
    Meteor.loginWithPassword(username, password, (err) => {
      if (err) {
        alert(err);
      } else {
        //TODO: Se for professor give classes se for alura professor lista..
        history.push("give-classes");
      }
    });
  };

  return (
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://preview.colorlib.com/theme/bootstrap/login-form-07/images/undraw_remotely_2j6y.svg"
              alt="Image"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 contents">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="mb-4">
                  <h3>Entrar</h3>
                  <p className="mb-4">
                    Aqui você poderá ter aulas com os melhores professores ou
                    ensinar para os melhores alunos.
                  </p>
                </div>
                <form onSubmit={submit} action="#" method="post">
                  <div className="form-group first">
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Usuário"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="form-group last mb-4">
                    <input
                      placeholder="Senha"
                      type="password"
                      className="form-control"
                      id="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="d-flex mb-5 align-items-center">
                    <label className="control control--checkbox mb-0">
                      <span className="caption">Lemberar senha</span>
                      <input type="checkbox" />
                      <div className="control__indicator"></div>
                    </label>
                    <span className="ml-auto">
                      <a
                        href="#"
                        className="forgot-pass"
                        onClick={() => goToNewUserPage()}
                      >
                        Criar uma conta
                      </a>
                      <br />
                      <a href="#" className="forgot-pass">
                        Esqueci minha senha
                      </a>
                    </span>
                  </div>
                  <input
                    type="submit"
                    value="Entrar"
                    className="btn btn-block btn-primary"
                  />
                  <span className="d-block text-left my-4 text-muted">
                    — ou entrar com —
                  </span>
                  <div className="social-login">
                    <a href="#" className="facebook">
                      <span className="icon-facebook mr-3"></span>
                    </a>
                    <a href="#" className="twitter">
                      <span className="icon-twitter mr-3"></span>
                    </a>
                    <a href="#" className="google">
                      <span className="icon-google mr-3"></span>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
