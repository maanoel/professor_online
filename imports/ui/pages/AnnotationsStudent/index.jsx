import React from "react";
import SiderBar from "../../components/SiderBar";
import { useTracker } from "meteor/react-meteor-data";
import PageHeader from "../../components/PageHeader";
import { useHistory } from "react-router-dom";

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
    <div>
      <SiderBar />
      <PageHeader title="Anote informações que considere importante e consulte depois."></PageHeader>
    </div>
  );
};

export default AnnotationsStudent;
