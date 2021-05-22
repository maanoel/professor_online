import React from "react";
import SiderBar from "../../components/SiderBar";
import { useTracker } from "meteor/react-meteor-data";
import PageHeader from "../../components/PageHeader";
import { useHistory } from "react-router-dom";
import TextArea from "../../components/TextArea";
import Input from "../../components/Input";

import "./styles.css";

const AnnotationsStudent = () => {
  const profile = useTracker(() => {
    const history = useHistory();
    if (!Meteor.userId()) {
      history.push("/login");
      return [];
    }
  });

  const update = () => {};

  return (
    <div className="annotation">
      <SiderBar />
      <PageHeader title="Anote informações que considere importante e consulte depois."></PageHeader>
      <main>
        <Input
        name="title"
        label="Título da anotação" />
        <div className="text-area-anotation">
          <TextArea  label="Anotação" />
        </div> 

        <button type="submit">Salvar cadastro</button>

      </main>
    </div>
  );
};

export default AnnotationsStudent;
