import { ChatMessageCollection } from "../../db/ChatMessageCollection";
import { ChatCollection } from "../../db/ChatCollection";

Meteor.methods({
  "chatmessages.insert"(obj) {
    if (!this.userId) {
      throw new Meteor.Error("Não autorizado.");
    }

    let chatUserId = 0;

    let chatUsers = ChatCollection.findOne({
      user_destiny: obj.user_destiny,
      user_origin: obj.user_origin,
    });

    if (!chatUsers) {
      chatUserId = ChatCollection.insert({
        user_destiny: obj.user_destiny,
        user_origin: obj.user_origin,
        last_message: new Date(),
      });
    } else {
      ChatCollection.update(
        {
          _id: chatUsers._id,
        },
        {
          $set: {
            last_message: new Date(),
          },
        }
      );

      chatUserId = chatUsers._id;
    }

    return ChatMessageCollection.insert({
      message: obj.message,
      user_destiny: obj.user_destiny,
      user_origin: obj.user_origin,
      name_user_send: obj.name_user_send,
      chat_user_id: chatUserId,
      created: new Date(),
    });
  },
});
