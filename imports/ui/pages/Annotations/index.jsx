import React, { useState } from "react";
import SiderBar from "../../components/SiderBar";
import { useTracker } from "meteor/react-meteor-data";
import PageHeader from "../../components/PageHeader";
import { useHistory } from "react-router-dom";
import TextArea from "../../components/TextArea";
import Input from "../../components/Input";
import FormDanger from "../../components/Alerts/FormDanger";

import "./styles.css";

const Annotations = () => {
  const [annotation, setAnnotation] = useState("");
  const [annotationTitle, setAnnotationTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [showDanger, setShowDanger] = useState(false);

  const profile = useTracker(() => {
    const history = useHistory();
    if (!Meteor.userId()) {
      history.push("/login");
      return [];
    }
  });

  const history = useTracker(() => {
    return useHistory();
  });

  const insert = () => {
    if (!_validEmpty()) return;

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
          history.push("/annotations-list");
        }
      }
    );
  };

  function _validEmpty() {
    if (!annotationTitle || annotationTitle == "") {
      _setMessageDanger("Informe um titúlo para sua anotação.");
      return false;
    }

    if (!annotation || annotation == "") {
      _setMessageDanger("Informe algo na sua anotação.");
      return false;
    }

    return true;
  }

  function _setMessageDanger(errorMessage) {
    setShowDanger(true);
    setErrorMessage(errorMessage);
  }

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

        {showDanger ? <FormDanger errorMessage={errorMessage} /> : ""}

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
