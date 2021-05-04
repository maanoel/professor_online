import { Meteor } from "meteor/meteor";
import { ClassesCollection } from "../../db/ClassesCollection";

Meteor.publish("classes", function publishClasses() {
  return ClassesCollection.find({});
});
