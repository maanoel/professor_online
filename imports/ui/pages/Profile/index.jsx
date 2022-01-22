import React, { useState } from "react";
import SiderBar from "../../components/SiderBar";
import { useTracker } from "meteor/react-meteor-data";
import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Select from "../../components/Select";
import { useHistory } from "react-router-dom";
import { ProfilesCollection } from "../../../db/ProfilesCollection";
import Images from "../../../db/ImageCollection";
import FormSuccess from "../../components/Alerts/FormSuccess";

const ProfileForm = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState(false);

  const [teste, setTeste] = useState("");
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
      name: profile.name,
      surname: profile.surname,
      headline: profile.headline,
      city: profile.city,
      state: profile.state,
    });

    window.scrollTo(-1, -1);
    _setMessageSucess("As informações do seu perfil foram atualizadas.");
  };

  setName = (value) => {
    profile.name = value;
  };

  setSurName = (value) => {
    profile.surname = value;
  };

  setHeadLine = (value) => {
    profile.headline = value;
  };

  setCity = (value) => {
    profile.city = value;
  };

  setState = (value) => {
    profile.state = value;
  };

  setAvatar = (value) => {
    profile.avatar = value;
  };

  changeImage = () => {
    document.getElementById("fileInput").click();
  };

  function _setMessageSucess(message) {
    setShowAlert(true);
    setAlertMessage(message);
  }

  changeFile = (e) => {
    Meteor.subscribe("files.images.all");

    if (e.currentTarget.files && e.currentTarget.files[0]) {
      // We upload only one file, in case
      // multiple files were selected
      const upload = Images.insert(
        {
          file: e.currentTarget.files[0],
          chunkSize: "dynamic",
        },
        false
      );

      upload.on("start", function () {});

      upload.on("end", function (error, fileObj) {
        if (error) {
          alert(`Error during upload: ${error}`);
        } else {
          const imagesFind = Images.findOne().link();
          setTeste(imagesFind);
          alert(`File "${fileObj.name}" successfully uploaded`);
        }
      });

      upload.start();
    }
  };

  function scrollToAlert() {
    const alertDom = document.querySelector("#sucess-alert");

    if (alertDom) {
      alertDom.scrollIntoView();
    }
  }

  scrollToAlert();

  return (
    <div>
      <SiderBar />
      <PageHeader title="Aqui estão as informações do seu perfil"></PageHeader>
      {profile
        ? [profile].map((p) => (
            <div className="container rounded bg-white mt-5 mb-5" key={p._id}>
              <div className="row">
                <div className="col-md-7 border-right">
                  <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                    <img
                      className="rounded-circle mt-5"
                      src={teste}
                      width="90"
                    />
                    <span className="font-weight-bold">
                      {profile.name} {profile.surname}
                    </span>
                    <span className="text-black-50">
                      falta@colocaroemailaqui.com
                    </span>
                    <span>United States</span>
                    <br />
                    <a onClick={() => changeImage()}>
                      Clique para alterar Imagem
                    </a>
                    <input
                      id="fileInput"
                      type="file"
                      onChange={(e) => changeFile(e)}
                      hidden
                    />
                  </div>
                </div>

                <div className="col-md-5 border-right">
                  <div className="p-3 py-5">
                    <div className="row mt-2">
                      <div className="col-md-6">
                        <Input
                          name="name"
                          label="Nome"
                          defaultValue={p.name}
                          minLength="5"
                          maxLength="250"
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="col-md-6">
                        <Input
                          name="surname"
                          label="Sobrenome"
                          maxLength="250"
                          minLength="5"
                          defaultValue={p.surname}
                          onChange={(e) => setSurName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-12">
                        <Input
                          name="headline"
                          label="Profissão"
                          minLength="5"
                          maxLength="200"
                          defaultValue={p.headline}
                          onChange={(e) => setHeadLine(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <Select
                          id="state"
                          name="state"
                          label="Estado"
                          value={p.state}
                          options={[
                            { value: "0", label: "Bahia" },
                            { value: "1", label: "Rio de Janeiro" },
                          ]}
                          onChange={(e) => setState(e.target.value)}
                        />
                      </div>
                      <div className="col-md-6">
                        <Select
                          name="city"
                          label="Cidade"
                          value={p.city}
                          options={[
                            { value: "0", label: "Salvador" },
                            { value: "1", label: "Rio de Janeiro" },
                          ]}
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </div>
                    </div>
                    <article className="default-item">
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

                      {showAlert ? <FormSuccess message={alertMessage} /> : ""}
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
