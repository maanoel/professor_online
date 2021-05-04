import { Meteor } from "meteor/meteor";

import "/imports/api/classes/classesMethods";
import "/imports/api/classes/classesPublications";

const SEED_USERNAME = "meteorite";
const SEED_PASSWORD = "password";

Meteor.startup(() => {
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }
});

Meteor.methods({
  "svg.get"(data) {
    return Assets.getText(data.path);
  },
});
