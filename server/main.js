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
