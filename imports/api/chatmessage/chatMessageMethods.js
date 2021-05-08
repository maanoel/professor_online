import { ChatMessageCollection } from "../../db/ChatMessageCollection";
import { ChatCollection } from "../../db/ChatCollection";

Meteor.methods({
  "chatmessages.insert"(obj) {
    // if (!this.userId) {
    //   throw new Meteor.Error("Not authorized.");
    // }

    let chatUserId = 0;

    let chatUsers = ChatCollection.find({
      user_destiny: obj.user_destiny,
      user_origin: obj.user_origin,
    });

    if (chatUsers.count() == 0) {
      chatUserId = ChatCollection.insert({
        user_destiny: obj.user_destiny,
        user_origin: obj.user_origin,
      });
    } else {
      chatUserId = chatUsers._id;
    }

    return ChatMessageCollection.insert({
      message: obj.message,
      user_destiny: obj.user_destiny,
      user_origin: obj.user_origin,
      name_user_send: obj.name_user_send,
      chat_user_id: chatUserId,
    });
  },
});
