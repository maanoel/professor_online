import { ChatMessageCollection } from "../../db/ChatMessageCollection";

Meteor.methods({
  "chatmessages.insert"(obj) {
    // if (!this.userId) {
    //   throw new Meteor.Error("Not authorized.");
    // }

    console.log(obj);
    return ChatMessageCollection.insert({
      message: obj.message,
      user_destiny: obj.user_destiny,
      user_origin: obj.user_origin,
      name_user_send: obj.name_user_send,
    });
  },
});
