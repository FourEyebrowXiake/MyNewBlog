import React from "react";
import Link from "gatsby-link";

import { siteMetadata } from "../../gatsby-config";
import SiteNavi from "../components/SiteNavi";

import "./gatsrap.scss";
import "animate.css/animate.css";
import "font-awesome/css/font-awesome.css";
import "prismjs/themes/prism-okaidia.css";
import "devicon/devicon.min.css";

class Template extends React.Component {
  render() {
    const { location, children } = this.props;
    return (
      <div>
        <SiteNavi title={siteMetadata.title} {...this.props} />
        <div className="fill-viewport">{children()}</div>
      </div>
    );
  }
}

export default Template;
