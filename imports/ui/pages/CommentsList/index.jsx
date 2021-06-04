import React, { useState, useEffect } from "react";
import { useTracker } from "meteor/react-meteor-data";
import { CommentCollection } from "../../../db/CommentCollection";
import PageHeader from "../../components/PageHeader";
import SiderBar from "../../components/SiderBar";
import TextItem from "../../components/TextItem";
import { useHistory } from "react-router-dom";
import CommentItem from "../../components/CommentItem"
import { Link } from "react-router-dom";

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
    }, {sort: {createdAt: -1}}).fetch();
  });

  return (
    <div id="page-teacher-list">
      <SiderBar />
      <PageHeader title="Comentário sobre a aula de Fulano de tal"></PageHeader>
      <main>
        <div className="list-group comment-list-content">
         <Link to="/comments" className="new-comment">
            Novo comentário
          </Link>
          {comments.map((comment)=> (
            <CommentItem comment={comment.comment}/>
          ))}

           {comments.length == 0 ? (
            <div className="alert alert-secondary" role="alert">
              Nenhum comentário foi inserida, que tal ser o primeiro a comentar sobre essa aula?
            </div>
          ) : (
            ""
          )}
        </div>
      </main>
    </div>
  );
};

export default CommentsList;
