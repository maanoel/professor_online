import { Meteor } from "meteor/meteor";
import { SchedulesCollection } from "../../db/SchedulesCollection";

Meteor.publish("schedules", function publishSchedules() {
  return SchedulesCollection.find({});
});
