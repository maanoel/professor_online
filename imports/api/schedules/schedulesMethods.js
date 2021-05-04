import { SchedulesCollection } from "../../db/SchedulesCollection";

Meteor.methods({
  "schedules.insert"(obj) {
    // if (!this.userId) {
    //   throw new Meteor.Error("Not authorized.");
    // }
    SchedulesCollection.insert(obj);
  },
});
