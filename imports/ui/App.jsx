import React, { useState, Fragment } from "react";
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import Routes from "../../client/routes";

const logout = () => Meteor.logout();

export const App = () => {
  const user = useTracker(() => Meteor.user());

  return (
    <div className="main">
      {user ? (
        <Fragment>
          <div className="user" onClick={logout}>
            {user.username} 🚪
          </div>

          <p>BEM VINDO</p>
        </Fragment>
      ) : (
        <Routes />
      )}
    </div>
  );
};

export default App;
