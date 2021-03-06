import { Meteor } from "meteor/meteor";

import "/imports/api/classes/classesMethods";
import "/imports/api/classes/classesPublications";
import "/imports/api/schedules/schedulesMethods";
import "/imports/api/schedules/schedulesPublications";
import "/imports/api/chatmessage/chatMessageMethods";
import "/imports/api/chatmessage/chatMessagePublications";
import "/imports/api/chat/chatPublications";
import "/imports/api/profile/profilePublications";
import "/imports/api/login/loginMethods";
import "/imports/api/profile/profilesMethods";
import "/imports/api/annotation/annotationMethods";
import "/imports/api/annotation/annotationPublications";
import "/imports/api/comment/commentMethods";
import "/imports/api/comment/commentPublications";
import "/imports/api/images/imagesPublications";

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

ServiceConfiguration.configurations.remove({
  service: "facebook",
});

ServiceConfiguration.configurations.insert({
  service: "facebook",
  appId: "327300232286572",
  secret: "dddcba69cd8f5b7efd52ab0bd50bbe0b",
});

Accounts.onCreateUser(function (options, user) {
  console.log("OncreateUser");
  if (!user.services.facebook) {
    return user;
  }
  user.username = user.services.facebook.name;
  user.emails = [{ address: user.services.facebook.email }];

  return user;
});
