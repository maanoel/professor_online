import { Meteor } from "meteor/meteor";
import { ProfilesCollection } from "../../db/ProfilesCollection";

Meteor.publish("profiles", function publishProfile() {
  return ProfilesCollection.find({});
});
