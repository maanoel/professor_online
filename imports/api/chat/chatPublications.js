import { Meteor } from "meteor/meteor";
import { ChatCollection } from "../../db/ChatCollection";

Meteor.publish("chats", function publishChat() {
  return ChatCollection.find({});
});
