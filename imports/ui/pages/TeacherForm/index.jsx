import React, { useState } from "react";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import Select from "../../components/Select";
import { useTracker } from "meteor/react-meteor-data";
import { useHistory } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import SiderBar from "../../components/SiderBar";
import "./styles.css";

const TeacherForm = () => {
  const historyAfterClick = useTracker(()=> useHistory() );

  useTracker(() => {
    const history = useHistory();
    if (!Meteor.userId()) {
      history.push("/login");
      return [];
    }
  });

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [bio, setBio] = useState("");
  const [subject, setSubject] = useState("");
  const [cost, setCost] = useState("");
  const [description, setDescription] = useState("");

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: "", to: "" },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: "", to: "" }]);
  }

  function setScheduleItemValue(position, field, value) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return {
          ...scheduleItem,
          [field]: value,
        };
      }

      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  }

  function handleCreateClass(e) {
    e.preventDefault();

    Meteor.call(
      "classes.insert",
      {
        name: name,
        avatar: avatar,
        whatsapp: whatsapp,
        bio: bio,
        subject: subject,
        cost: Number(cost),
        description: description
      },
      (error, id) => {
        if (error) {
          alert(error);
        } else {
          historyAfterClick.push("study");
        }
      }
    );
  }

  return (
    <div id="page-teacher-form" >
      <SiderBar />
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Sobre a aula</legend>

            <Select
              name="subject"
              label="Matéria"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              options={[
                { value: "Artes", label: "Artes" },
                { value: "Quimica", label: "Quimica" },
                { value: "Fisica", label: "Fisica" },
                { value: "Portugues", label: "Portugues" },
              ]}
            />

              <Input
                name="cost"
                label="Preço da hora da aula em reais"
                value={cost}
                min="10" max="1000"
                type="range"
                onChange={(e) => setCost(e.target.value)}
              />

              <Input
                name="costValue"
                value={"R$ " + cost}
                min="10" max="1000"
                type="text"
                disabled
              />

             <TextArea
                label="Descricação sobre sua aula"
                maxLength="200"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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

export default TeacherForm;
