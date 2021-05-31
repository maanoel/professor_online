import React, { useState } from "react";
import SiderBar from "../../components/SiderBar";
import { useTracker } from "meteor/react-meteor-data";
import PageHeader from "../../components/PageHeader";
import { useHistory } from "react-router-dom";
import TextArea from "../../components/TextArea";
import Input from "../../components/Input";
import "./styles.css";

const Comments = () => {
  const [comment, setComment] = useState("");
  const [title, setTitle] = useState("");

  const profile = useTracker(() => {
    const history = useHistory();
    if (!Meteor.userId()) {
      history.push("/login");
      return [];
    }
  });

  const update = (e) => {
    Meteor.subscribe("comments");
    Meteor.call(
      "comments.insert",
      { title: title, comment: comment },
      (err) => {
        if (err) alert(err);
        else alert("cadastrado ok");
      }
    );
  };

  return (
    <div className="comments">
      <SiderBar />
      <PageHeader title="Comente sobre a sua aula com fulano de tal"></PageHeader>
      <main>
        <Input
          name="notes"
          label="Título"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="text-area-anotation">
          <TextArea
            label="Comentário"
            onChange={(e) => setComment(e.target.value)}
          />
        </div>

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
