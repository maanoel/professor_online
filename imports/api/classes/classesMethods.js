import { ClassesCollection } from "../../db/ClassesCollection";

Meteor.methods({
  "classes.insert"(obj) {
    // if (!this.userId) {
    //   throw new Meteor.Error("Not authorized.");
    // }

    return ClassesCollection.insert({
      name: obj.name,
      avatar: obj.avatar,
      whatsapp: obj.whatsapp,
      bio: obj.bio,
      subject: obj.subject,
      cost: obj.cost,
    });
  },
});
