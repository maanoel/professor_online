import React, { useState, useEffect } from "react";
import { useTracker } from "meteor/react-meteor-data";
import { CommentCollection } from "../../../db/CommentCollection";
import PageHeader from "../../components/PageHeader";
import SiderBar from "../../components/SiderBar";
import TextItem from "../../components/TextItem";
import { useHistory } from "react-router-dom";

import "./styles.css";

const CommentsList = () => {
  const comments = useTracker(() => {
    const history = useHistory();
    if (!Meteor.userId()) {
      history.push("/login");
      return [];
    }

    Meteor.subscribe("comments");

    return CommentCollection.find({
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
      <PageHeader title="Comentário sobre a aula de Fulano de tal"></PageHeader>
      <main>
        <div className="list-group">
          {comments.map((comment) => (
            <TextItem
              id={comment._id}
              key={comment._id}
              title={comment.title}
              text={comment.comment}
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

export default CommentsList;
