import { ProfilesCollection } from "../../db/ProfilesCollection";

Meteor.methods({
  "profiles.update"(obj) {
    if (!this.userId) {
      throw new Meteor.Error("Not authorized.");
    }

    return ProfilesCollection.update(
      {
        userId: this.userId,
      },
      {
        $set: {
          name: obj.name,
          surname: obj.surname,
          headline: obj.headline,
          city: obj.city,
          state: obj.state,
        },
      }
    );
  },
});
