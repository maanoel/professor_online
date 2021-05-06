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
          <nav id="sidebar">
            <div className="sidebar-header">
              <h3>Proffy</h3>
            </div>

            <ul>
              <p>Dummy Heading</p>
              <li className="active">
                <a
                  href="#homeSubmenu"
                  data-toggle="collapse"
                  aria-expanded="false"
                  className="dropdown-toggle"
                >
                  Home
                </a>
                <ul className="collapse list-unstyled" id="homeSubmenu">
                  <li>
                    <a href="#">Home 1</a>
                  </li>
                  <li>
                    <a href="#">Home 2</a>
                  </li>
                  <li>
                    <a href="#">Home 3</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a
                  href="#pageSubmenu"
                  data-toggle="collapse"
                  aria-expanded="false"
                  className="dropdown-toggle"
                >
                  Pages
                </a>
                <ul className="collapse list-unstyled" id="pageSubmenu">
                  <li>
                    <a href="#">Page 1</a>
                  </li>
                  <li>
                    <a href="#">Page 2</a>
                  </li>
                  <li>
                    <a href="#">Page 3</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <div id="content">
            <Routes />
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <Routes />
        </Fragment>
      )}
    </div>
  );
};

export default App;
