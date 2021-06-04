import React, { useState } from "react";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import Select from "../../components/Select";
import { useTracker } from "meteor/react-meteor-data";
import { useHistory } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import SiderBar from "../../components/SiderBar";
import { ClassesCollection } from "../../../db/ClassesCollection";

import "./styles.css";

const TeacherForm = () => {
  const historyAfterClick = useTracker(()=> useHistory() );
  const [costValue, setCostValue] = useState(0);
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setdescriptionValue] = useState("");

  const teacherClass = useTracker(() => {
    const history = useHistory();
    if (!Meteor.userId()) {
      history.push("/login");
      return [];
    }

    Meteor.subscribe("classes");

    const collectionFind = ClassesCollection.findOne({
      userId: Meteor.userId(),
    });
    
    if(!collectionFind)
      return [collectionFind];
    else{
      return collectionFind;
    }
  });

  setCost = (value) => {  
    setCostValue(value) ;
    teacherClass.cost = value;
  }

  setTitle = (value) => {  
    setTitleValue(value) ;
    teacherClass.title = value;
  }

  setDescription = (value) => {
    setdescriptionValue(value) ;
    teacherClass.description = value;
  }

  function handleCreateClass(e) {
    e.preventDefault();
    update();
  }

  const insert = () => {
     Meteor.call(
      "classes.insert",
      {
        title: titleValue? titleValue: teacherClass.title,
        cost: costValue? costValue: teacherClass.costValue,
        description: descriptionValue? descriptionValue: teacherClass.description,
      },
      (error, id) => {
        if (error) {
          alert(error);
        } else {
        }
      }
    );
  }

  const update = () => {
    if(Array.isArray(teacherClass)){
      insert();
    }{
      Meteor.call("classes.update", {
        cost: costValue? costValue : teacherClass.cost,
        description: descriptionValue? descriptionValue : teacherClass.description,
        title: titleValue? titleValue: teacherClass.title
      });
  }
    alert(
      "Dados atualizados com sucesso, ok ta bizarro essa mensgem, depois vamos criar um componente de notificação ;)"
    );
  };

  return (
    <div id="page-teacher-form" >
      <SiderBar />
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />
       {teacherClass
        ? [teacherClass].map((p) => (
      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Sobre a aula</legend>

              <Input
                name="title"
                label="Título da sua aula"
                maxLength="150"
                minLength="10"
                defaultValue={p.title}
                type="text"
                onChange={(e) => setTitle(e.target.value)}
              />

           
              <Input
                name="cost"
                label="Preço da hora da aula em reais"
                defaultValue={p.cost}
                min="10" max="1000"
                type="range"
                onChange={(e) => setCost(e.target.value)}
              />

              <Input
                name="costValue"
                value={"R$ " + (costValue > 0 ? costValue: p.cost ) }
                min="10" max="1000"
                type="text"
                disabled
              />
             <TextArea
                label="Descreve sobre sua aula"
                minLength="50"
                maxLength="200"
                defaultValue={p.description}
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
      ))
        : "Carregando"}
    </div>
  );
};

export default TeacherForm;
