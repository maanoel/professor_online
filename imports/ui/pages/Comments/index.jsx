import React, { useState } from "react";
import SiderBar from "../../components/SiderBar";
import { useTracker } from "meteor/react-meteor-data";
import PageHeader from "../../components/PageHeader";
import { useHistory } from "react-router-dom";
import TextArea from "../../components/TextArea";
import Input from "../../components/Input";
import FormDanger from "../../components/Alerts/FormDanger";

import "./styles.css";

const Comments = () => {
  const [comment, setComment] = useState("");
  const [title, setTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [showDanger, setShowDanger] = useState(false);

  const historyToBack = useTracker(()=> useHistory());

  const profile = useTracker(() => {
    const history = useHistory();
    if (!Meteor.userId()) {
      history.push("/login");
      return [];
    }
  });

  const update = (e) => {
     if (!_validaEmpty()) return;

    Meteor.subscribe("comments");
    Meteor.call(
      "comments.insert",
      { title: title, comment: comment },
      (err) => {
        if (err) alert(err);
        else historyToBack.push("/comments-list");
      }
    );
  };

  function _validaEmpty() {

    if (comment == "" || comment == null) {
      _setMessageDanger("Insira um comentário antes de avançar.");
      return false;
    }

    return true;
  }

  function _setMessageDanger(errorMessage) {
    setShowDanger(true);
    setErrorMessage(errorMessage);
  }

  return (
    <div className="comments">
      <SiderBar />
      <PageHeader title="Comente sobre a sua aula com fulano de tal"></PageHeader>
      <main>

        <div className="text-area-anotation">
          <TextArea
            minLength="5"
            maxLength="300"
            label="Comentário"
            onChange={(e) => setComment(e.target.value)}
          />
        </div>

        {showDanger ? <FormDanger errorMessage={errorMessage} /> : ""}


        <button
          onClick={() => {
            update();
          }}
        >
          Salvar Comentário
        </button>
      </main>
    </div>
  );
};
export default Comments;
