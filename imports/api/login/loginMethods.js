import { ProfilesCollection } from "../../db/ProfilesCollection";

Meteor.methods({
  "new-user"(obj) {
    const userId = Accounts.createUser({
      username: obj.username,
      password: obj.password,
      email: obj.email,
      profile: { name: obj.user },
    });

    ProfilesCollection.insert({ bio: bio, avatar: avatar, userId: userId });
  },
});
