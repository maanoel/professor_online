import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";
import { useTracker } from "meteor/react-meteor-data";
import { ClassesCollection } from "../../../db/ClassesCollection";
import Chat from "../../components/Chat";
import SiderBar from "../../components/SiderBar";
import VideoService from "../../components/VideoService";

import { useHistory } from "react-router-dom";

import "./styles.css";

const TeacherList = () => {
  const teachers = useTracker(() => {
    const history = useHistory();

    if (!Meteor.userId()) {
      history.push("/login");
      return [];
    }

    Meteor.subscribe("classes");
    return ClassesCollection.find({}).fetch();
  });

  const [userId, setUserId] = useState(0);
  const [subject, setSubject] = useState("");
  const [status, setStatus] = useState("");
  const [time, setTime] = useState("");
  const [showChat, setShowChat] = useState(false);

  function searchTeachers(e) {
    e.preventDefault();
  }

  function closeChat() {
    setShowChat(!showChat);
  }

  function handlerClickChat(user_id) {
    setUserId(user_id);
    setShowChat(true);
  }

  function handlerClickVideo() {
    new VideoService().run("https://proffy.daily.co/proffy");
  }

  return (
    <div id="page-teacher-list">
      <SiderBar />
      {showChat ? <Chat userId={userId} closeChat={closeChat} /> : ""}

      <PageHeader title="Estes são os Proffys disponívies.">
        <div className="filters">
          <form onSubmit={searchTeachers} id="search-teachers">
            <Select
              name="subject"
              label="Matéria"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              options={[
                { value: "Artes", label: "Artes" },
                { value: "0", label: "Quimica" },
                { value: "Fisica", label: "Fisica" },
                { value: "Portugues", label: "Portugues" },
              ]}
            />

            <Select
              name="status"
              label="Status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              options={[
                { value: "0", label: "Online" },
                { value: "1", label: "Em Aula" },
                { value: "2", label: "Offline" },
              ]}
            />

            <Input
              className="teacher-name"
              type="text"
              name="teacher"
              label="Nome do professor"
              maxLength="35"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />

            <button class="search-button" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </PageHeader>

      <main>
        <p>
          Esses são os professores disponíveis na plataforma. Escolha um dos
          professores e inicie um chamada de vídeo
        </p>
        <p>
          Os primeiros 5 minutos serão grátis, depois disso, será cobrado o
          valor da hora, especificado pelo professor.
        </p>

        {teachers.map((teacher) => (
          <TeacherItem
            key={teacher._id}
            teacher={teacher}
            onClickChat={() => handlerClickChat(teacher.user_id)}
            onClickVideo={() => handlerClickVideo()}
          />
        ))}
      </main>
    </div>
  );
};

export default TeacherList;
