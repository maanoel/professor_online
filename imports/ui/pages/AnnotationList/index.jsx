import React, { useState, useEffect } from "react";
import { useTracker } from "meteor/react-meteor-data";
import { AnnotationCollection } from "../../../db/AnnotationCollection";
import PageHeader from "../../components/PageHeader";
import SiderBar from "../../components/SiderBar";
import { useHistory } from "react-router-dom";
import TextItem from "../../components/TextItem";
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

  return (
    <div id="page-teacher-list">
      <SiderBar />
      <PageHeader title="Uma lista de anotações com como pouchitis   ;)"></PageHeader>
      <main>
        <div class="list-group">
          {annotations.map((annotation) => (
            <TextItem
              key={annotation.annotationTitle}
              title={annotation.annotationTitle}
              text={annotation.annotation}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default AnnotationList;
