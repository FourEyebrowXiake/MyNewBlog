import React from 'react'
import Link from 'gatsby-link'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


import { Container } from 'react-responsive-grid'
import { siteMetadata } from '../../gatsby-config'
import SiteNavi from '../components/SiteNavi'
import SiteFooter from '../components/SiteFooter'

import './gatsrap.scss'
import 'animate.css/animate.css'
import 'font-awesome/css/font-awesome.css'
import 'prismjs/themes/prism-okaidia.css'
import 'devicon/devicon.min.css'

class Template extends React.Component {

  render() {
    const { location, children } = this.props;
    return (
      <div style={{position: "relative"}}>
        <SiteNavi title={siteMetadata.title} {...this.props} />
            <ReactCSSTransitionGroup
              transitionName="example"
              component="div"
              className="transitionWrapper"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}
              >
              <div key={location.key}
                 style={{position:"absolute", width: "100%"}}
                >
                <div className="vheight">
                  {children()}
                </div>
                <SiteFooter />
              </div>
            </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default Template
