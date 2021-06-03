import { ClassesCollection } from "../../db/ClassesCollection";

Meteor.methods({
  "classes.insert"(obj) {
    if (!this.userId) {
      throw new Meteor.Error("Não autorizado.");
    }

    return ClassesCollection.insert({
      name: obj.name,
      avatar: obj.avatar,
      whatsapp: obj.whatsapp,
      bio: obj.bio,
      subject: obj.subject,
      cost: obj.cost,
      user_id: this.userId,
      description: obj.description
    });
  },
});
