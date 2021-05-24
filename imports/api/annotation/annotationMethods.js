import { AnnotationCollection } from "../../db/AnnotationCollection";

Meteor.methods({
  "annotations.insert"(obj) {
    if (!this.userId) {
      throw new Meteor.Error("Not authorized.");
    }

    AnnotationCollection.insert({
      userId: this.userId,
      annotation: obj.annotation,
      annotationTitle: obj.annotationTitle,
      createdAt: new Date(),
    });
  },
});
