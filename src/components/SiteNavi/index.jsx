import React from 'react'
import Link from 'gatsby-link'

import './style.scss'

class SiteNavi extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <nav className="nav-shadow navbar navbar-expand navbar-dark flex-column flex-md-row bg-primary">
        <div className="container">
          <Link className="text-center" to="/">
            <h1 className="navbar-brand mb-0">{title}</h1>
          </Link>
          <div className="navbar-nav-scroll">
            <ul className="navbar-nav bd-navbar-nav flex-row">
              <li
                className={
                  location.pathname === '/profile/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/profile/" className="nav-link">
                  Profile
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/categories/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/categories/" className="nav-link">
                  Categories
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default SiteNavi
