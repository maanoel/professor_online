import { CommentCollection } from "../../db/CommentCollection";

Meteor.methods({
  "comments.insert"(obj) {
    if (!this.userId) {
      throw new Meteor.Error("Não autorizado.");
    }

    CommentCollection.insert({
      userId: this.userId,
      // userReceive: obj.userReceive,
      title: obj.title,
      comment: obj.comment,
      createdAt: new Date(),
    });
  },
});
