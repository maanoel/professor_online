import React, { useState } from "react";
import SiderBar from "../../components/SiderBar";
import { useTracker } from "meteor/react-meteor-data";
import PageHeader from "../../components/PageHeader";
import { useHistory } from "react-router-dom";
import TextArea from "../../components/TextArea";
import Input from "../../components/Input";

import "./styles.css";

const Annotations = () => {
  const [annotation, setAnnotation] = useState("");
  const [annotationTitle, setAnnotationTitle] = useState("");

  const profile = useTracker(() => {
    const history = useHistory();
    if (!Meteor.userId()) {
      history.push("/login");
      return [];
    }
  });

  const insert = () => {
    Meteor.subscribe("annotations");
    Meteor.call(
      "annotations.insert",
      {
        annotation: annotation,
        annotationTitle: annotationTitle,
      },
      (error) => {
        if (error) {
          alert(error);
        } else {
          alert("criado com sucesso.");
        }
      }
    );
  };

  return (
    <div className="annotation">
      <SiderBar />
      <PageHeader title="Anote informações que considere importante e consulte depois."></PageHeader>
      <main>
        <Input
          name="title"
          label="Título da anotação"
          onChange={(e) => setAnnotationTitle(e.target.value)}
        />
        <div className="text-area-anotation">
          <TextArea
            label="Anotação"
            onChange={(e) => setAnnotation(e.target.value)}
          />
        </div>

        <button
          onClick={() => {
            insert();
          }}
        >
          Salvar Anotação
        </button>
      </main>
    </div>
  );
};

export default Annotations;
