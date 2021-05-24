import React, { useState, useEffect } from "react";
import { useTracker } from "meteor/react-meteor-data";
import { AnnotationCollection } from "../../../db/AnnotationCollection";
import PageHeader from "../../components/PageHeader";
import SiderBar from "../../components/SiderBar";
import TextItem from "../../components/TextItem";
import { useHistory } from "react-router-dom";

import "./styles.css";

const AnnotationList = () => {
  const annotations = useTracker(() => {
    const history = useHistory();
    if (!Meteor.userId()) {
      history.push("/login");
      return [];
    }

    Meteor.subscribe("annotations");

    return AnnotationCollection.find({
      userId: Meteor.userId(),
    }).fetch();
  });

  const history = useTracker(() => {
    let history = useHistory();
    return history;
  });

  const handlerClick = (id) => {
    history.push("/annotation/");
  };

  return (
    <div id="page-teacher-list">
      <SiderBar />
      <PageHeader title="Uma lista de anotações com como pouchitis   ;)"></PageHeader>
      <main>
        <div className="list-group">
          {annotations.map((annotation) => (
            <TextItem
              id={annotation._id}
              key={annotation._id}
              title={annotation.annotationTitle}
              text={annotation.annotation}
              onClick={(id) => {
                handlerClick(id);
              }}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default AnnotationList;
