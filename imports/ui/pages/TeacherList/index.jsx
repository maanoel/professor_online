import React, { useState, FormEvent } from "react";

import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";
import { useTracker } from "meteor/react-meteor-data";

import { ClassesCollection } from "../../../db/ClassesCollection";

import "./styles.css";
import Chat from "../../components/Chat";
import SiderBar from "../../components/SiderBar";

const TeacherList = () => {
  let classes = [];
  const [teachers, setTeachers] = useState(classes);

  useTracker(() => {
    Meteor.subscribe("classes");
    classes = ClassesCollection.find({}).fetch();
    setTimeout(() => {
      setTeachers(classes);
    }, 0);
  });

  const [subject, setSubject] = useState("");
  const [week_day, setWeek_day] = useState("");
  const [time, setTime] = useState("");
  const [showChat, setShowChat] = useState(false);

  function searchTeachers(e) {
    e.preventDefault();
    setTeachers(classes);
  }

  function closeChat() {
    setShowChat(!showChat);
  }

  function handlerClickChat() {
    setShowChat(true);
  }

  return (
    <div id="page-teacher-list" className="contaienr">
      <SiderBar />
      <PageHeader title="Estes são os Proffys disponívies.">
        <form onSubmit={searchTeachers} id="search-teachers">
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

          <Select
            name="week-day"
            label="Dia da Semana"
            value={week_day}
            onChange={(e) => setWeek_day(e.target.value)}
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda-Feira" },
              { value: "2", label: "Terça-Feira" },
              { value: "3", label: "Quarta-Feira" },
              { value: "4", label: "Quinta-Feira" },
              { value: "5", label: "Sexta-Feira" },
              { value: "6", label: "Sabado" },
            ]}
          />

          <Input
            type="time"
            name="time"
            label="Hora"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <button type="submit">Buscar</button>
        </form>
      </PageHeader>
      {showChat ? <Chat closeChat={closeChat} /> : ""}
      <main>
        {teachers.map((teacher) => (
          <TeacherItem
            key={teacher.id}
            teacher={teacher}
            onClick={handlerClickChat}
          />
        ))}
      </main>
    </div>
  );
};

export default TeacherList;
