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

  function handleCreateUser(e) {
    if (_validaEmpty());

    e.preventDefault();
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
          alert(err);
        } else {
          Meteor.loginWithPassword(userName, password, (err) => {
            if (err) {
            } else {
              location.href = "study";
            }
          });
        }
      }
    );
  }

  function _validaEmpty() {
    if (name == "" || name == null) {
      alert("preencha o nome");
    }

    if (userName == "" || userName == null) {
      alert("preencha o userName");
    }

    if (email == "" || email == null) {
      alert("preencha o email");
    }

    if (bio == "" || bio == null) {
      alert("preencha o bio");
    }

    if (password == "" || password == null) {
      alert("preencha o password");
    }

    if (passwordAgain == "" || passwordAgain == null) {
      alert("preencha o passwordAgain");
    }
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
              onChange={(e) => setUserName(e.target.value)}
            />
            <Input
              name="name"
              label="Nome completo"
              maxLength="200"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Input
              name="passwordRepeat"
              label="Repita a senha"
              minLength="8"
              value={passwordAgain}
              onChange={(e) => setPasswordAgain(e.target.value)}
            />

            <TextArea
              name="bio"
              label="Biografia"
              value={bio}
              maxlength="500"
              onChange={(e) => setBio(e.target.value)}
            />
          </fieldset>
          <footer>
            <p>
              <img
                src="https://i.ibb.co/prmTsbr/warning.png"
                alt="Aviso importante"
              />
              <br />
              Preencha todos os dados
            </p>
            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
};

export default NewUserForm;
