import React, { useState } from "react";
import SiderBar from "../../components/SiderBar";
import { useTracker } from "meteor/react-meteor-data";
import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Select from "../../components/Select";
import { useHistory } from "react-router-dom";
import { ProfilesCollection } from "../../../db/ProfilesCollection";

const ProfileForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurName] = useState("");
  const [headline, setHeadLine] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const profile = useTracker(() => {
    const history = useHistory();
    if (!Meteor.userId()) {
      history.push("/login");
      return [];
    }

    Meteor.subscribe("profiles");

    return ProfilesCollection.findOne({
      userId: Meteor.userId(),
    });
  });

  const update = () => {
    Meteor.call("profiles.update", {
      name: name,
      surname: surname,
      headline: headline,
      city: city,
      state: state,
    });
    alert(
      "Dados atualizado com sucesso, ok ta bizarro essa mensgem, depois vamos criar um componente de notificação ;)"
    );
  };

  console.log(profile);

  return (
    <div>
      <SiderBar />
      <PageHeader title="Aqui estão as informações do seu perfil"></PageHeader>
      {profile
        ? [profile].map((p) => (
            <div className="container rounded bg-white mt-5 mb-5">
              <div className="row">
                <div className="col-md-7 border-right">
                  <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                    <img
                      className="rounded-circle mt-5"
                      src={p.avatar}
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
                          value={p.name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="col-md-6">
                        <Input
                          name="surname"
                          label="Sobrenosme"
                          value={p.surname}
                          onChange={(e) => setSurName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-12">
                        <Input
                          name="headline"
                          label="Profissão"
                          value={p.headline}
                          onChange={(e) => setHeadLine(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <Select
                          name="state"
                          label="Estado"
                          value={p.state}
                          options={[{ value: "0", label: "Bahia" }]}
                          onChange={(e) => setState(e.target.value)}
                        />
                      </div>
                      <div className="col-md-6">
                        <Select
                          name="city"
                          label="Cidade"
                          value={p.city}
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
                          Preencha todos os dados
                        </p>

                        <a
                          onClick={() => {
                            update();
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
          ))
        : "Carregando"}
    </div>
  );
};

export default ProfileForm;
