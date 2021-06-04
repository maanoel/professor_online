import { ClassesCollection } from "../../db/ClassesCollection";

Meteor.methods({
  "classes.insert"(obj) {
    if (!this.userId) {
      throw new Meteor.Error("Não autorizado.");
    }

    return ClassesCollection.insert({
      subject: obj.subject,
      cost: obj.cost,
      userId: this.userId,
      description: obj.description,
      title: obj.title
    });
  },
   "classes.update"(obj) {
    if (!this.userId) {
      throw new Meteor.Error("Não autorizado");
    }

    return ClassesCollection.update(
      {
        userId: this.userId,
      },
      {
        $set: {
          subject: obj.subject,
          cost: obj.cost,
          description: obj.description,
          title: obj.title
        },
      }
    );
  },
});
