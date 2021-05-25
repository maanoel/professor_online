import { Meteor } from "meteor/meteor";
import { CommentCollection } from "../../db/CommentCollection";

Meteor.publish("comments", function publishChatMessage() {
  return CommentCollection.find({});
});
