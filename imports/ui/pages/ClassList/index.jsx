import React, { useState } from "react";
import SiderBar from "../../components/SiderBar";
import { useTracker } from "meteor/react-meteor-data";
import PageHeader from "../../components/PageHeader";
import { useHistory } from "react-router-dom";
import TextArea from "../../components/TextArea";
import Input from "../../components/Input";
import FormDanger from "../../components/Alerts/FormDanger";

import "./styles.css";

const ClassList = () => {
  const profile = useTracker(() => {
    Meteor.subscribe("classes");

    const history = useHistory();
    if (!Meteor.userId()) {
      history.push("/login");
      return [];
    }
  });

  return (
    <div className="annotation">
      <SiderBar />
      <PageHeader title="Na sala de aula, é possível ficar online e offline da lista de pesquisa"></PageHeader>
      <main>
        <p>oi</p>
      </main>
    </div>
  );
};

export default ClassList;
