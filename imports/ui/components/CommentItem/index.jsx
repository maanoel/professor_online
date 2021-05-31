import React from "react";

import "./styles.css";

const CommentItem = ({ comment }) => {
  return (
    <article className="default-item comment-item">
      <div className="comment-image"><img className="rounded-circle " src="https://i.imgur.com/O1RmJXT.jpg" /></div>
      <div className="comment-content">
        <strong>
          {comment}
        </strong>
      </div>
    </article>
  );
};

export default CommentItem;
