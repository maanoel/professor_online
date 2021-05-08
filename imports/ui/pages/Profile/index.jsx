import React, { useState } from "react";
import SiderBar from "../../components/SiderBar";
import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Select from "../../components/Select";

const ProfileForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurName] = useState("");
  const [headline, setHeadLine] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  return (
    <div>
      <SiderBar />
      <PageHeader title="Aqui estão as informações do seu perfil"></PageHeader>
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-7 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                src="https://i.imgur.com/O1RmJXT.jpg"
                width="90"
              />
              <span className="font-weight-bold">John Doe</span>
              <span className="text-black-50">john_doe12@bbb.com</span>
              <span>United States</span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="row mt-2">
                <div className="col-md-6">
                  <Input
                    name="name"
                    label="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <Input
                    name="surname"
                    label="Sobrenome"
                    value={surname}
                    onChange={(e) => setSurName(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <Input
                    name="headline"
                    label="Profissão"
                    value={headline}
                    onChange={(e) => setHeadLine(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <Select
                    name="state"
                    label="Estado"
                    value={city}
                    options={[{ value: "0", label: "Bahia" }]}
                    onChange={(e) => setState(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <Select
                    name="city"
                    label="Cidade"
                    value={city}
                    options={[{ value: "0", label: "Salvador" }]}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
              </div>
              <article className="teacher-item">
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

                  <a
                    onClick={() => {
                      onClick(userOrigin);
                    }}
                    href="#"
                  >
                    Salvar dados
                  </a>
                </footer>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
