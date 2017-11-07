import React from "react";
import Link from "gatsby-link";

import "./style.scss";

class SiteNavi extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand">
        <div className="container">
          <div className=" h6 text-uppercase text-black-40">
            with
            <Link to="/">
              <h1>LIN POWERS</h1>
            </Link>
            comes Lin pesponsibility
          </div>

          <div className="navbar-nav-scroll">
            <ul className="navbar-nav bd-navbar-nav text-uppercase flex-row">
              <li className="nav-item">
                <Link to="/profile/" className="nav-link">
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/categories/" className="nav-link">
                  Tag
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default SiteNavi;
