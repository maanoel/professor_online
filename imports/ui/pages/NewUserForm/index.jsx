import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import FormDanger from "../../components/Alerts/FormDanger";

import "./styles";

const NewUserForm = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [showDanger, setShowDanger] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleCreateUser(e) {
    e.preventDefault();

    if (!_validaEmpty()) return;

    Meteor.call(
      "new-user",
      {
        username: userName,
        user: name,
        password: password,
        email: email,
        bio: bio,
      },
      (err) => {
        if (err) {
          _setMessageDanger(err.message);
        } else {
          Meteor.loginWithPassword(userName, password, (err) => {
            if (err) {
              _setMessageDanger(err.message);
            } else {
              location.href = "study";
            }
          });
        }
      }
    );
  }

  function _validaEmpty() {
    if (userName == "" || userName == null) {
      _setMessageDanger("Informe um nome de usuário antes de avançar");
      return false;
    }

    if (name == "" || name == null) {
      _setMessageDanger("Informe seu nome completo antes de avançar.");
      return false;
    }

    if (email == "" || email == null) {
      _setMessageDanger("Informe um email antes de avançar.");
      return false;
    }

    if (bio == "" || bio == null) {
      _setMessageDanger("Informe a bio antes de avançar.");
      return false;
    }

    if (password == "" || password == null) {
      _setMessageDanger(
        "Informe uma senha com no mínimo 8 caracteres antes de avançar."
      );
      return false;
    }

    if (passwordAgain == "" || passwordAgain == null) {
      _setMessageDanger("Repita a mesma senha antes de avançar.");
      return false;
    }

    return true;
  }

  function _setMessageDanger(errorMessage) {
    setShowDanger(true);
    setErrorMessage(errorMessage);
  }

  return (
    <div id="page-teacher-form" className="contaienr">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <form onSubmit={handleCreateUser}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input
              name="user"
              label="Usuário"
              value={userName}
              minLength="4"
              maxLength="20"
              onChange={(e) => setUserName(e.target.value)}
            />
            <Input
              name="name"
              label="Nome completo"
              maxLength="250"
              minLength="5"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Input
              name="email"
              label="Email"
              value={email}
              minLength="5"
              maxLength="250"
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              name="password"
              label="Senha"
              minLength="8"
              maxLength="80"
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <Input
              name="passwordRepeat"
              label="Repita a senha"
              minLength="8"
              maxLength="80"
              value={passwordAgain}
              type="password"
              onChange={(e) => setPasswordAgain(e.target.value)}
            />

            <TextArea
              name="bio"
              label="Biografia"
              value={bio}
              maxLength="500"
              onChange={(e) => setBio(e.target.value)}
            />
            {showDanger ? <FormDanger errorMessage={errorMessage} /> : ""}
          </fieldset>
          <footer>
            <p>
              <img
                src="https://i.ibb.co/prmTsbr/warning.png"
                alt="Aviso importante"
              />
              <br />
              Preencha todos os campos
            </p>
            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
};

export default NewUserForm;
