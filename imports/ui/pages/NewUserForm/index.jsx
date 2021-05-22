import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import "./styles";

const NewUserForm = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  function handleCreateUser(e) {
    e.preventDefault();
    Meteor.call("new-user", {
      username: userName,
      user: name,
      password: password,
      email: email,
      bio: bio,
      avatar: avatar,
    }, (err) => {
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
    });
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
              onChange={(e) => setUserName(e.target.value)}
            />
            <Input
              name="name"
              label="Nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />

            <Input
              name="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              name="password"
              label="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Input
              name="password"
              label="Repita a senha"
              value={passwordAgain}
              onChange={(e) => setPasswordAgain(e.target.value)}
            />

            <TextArea
              name="bio"
              label="Biografia"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </fieldset>

          <footer>
            <p>
              <img
                src="https://i.ibb.co/prmTsbr/warning.png"
                alt="Aviso importante"
              />
              Important!
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
