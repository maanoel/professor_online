import React, { useState, Fragment } from "react";
import { useTracker } from "meteor/react-meteor-data";

import "./styles.css";
import { MenuSvg } from "./svg/menu";

const SiderBar = () => {
  const [showSide, setShowSide] = useState(false);

  useTracker(() => {
    const user = Meteor.user();

    setTimeout(() => {
      setShowSide(!!user);
    }, 0);
  });

  return (
    <div className="main">
      {showSide ? (
        <Fragment>
          <nav id="sidebar">
            <div className="sidebar-header">
              <h3>
                Lista de opções
                <span
                  className="sidebar-menu-svg-close"
                  onClick={() => setShowSide(false)}
                >
                  {MenuSvg}
                </span>
              </h3>
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
        </Fragment>
      ) : (
        ""
      )}
    </div>
  );
};

export default SiderBar;
