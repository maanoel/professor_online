import { Meteor } from "meteor/meteor";
import { AnnotationCollection } from "../../db/AnnotationCollection";

Meteor.publish("annotations", function publishChatMessage() {
  return AnnotationCollection.find({});
});
