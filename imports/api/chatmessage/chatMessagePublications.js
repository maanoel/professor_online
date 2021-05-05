import { Meteor } from "meteor/meteor";
import { ChatMessageCollection } from "../../db/ChatMessageCollection";

Meteor.publish("chatmessages", function publishChatMessage() {
  return ChatMessageCollection.find({});
});
