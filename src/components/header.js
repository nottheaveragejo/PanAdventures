import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: '#b2dfe1',
      marginBottom: `1.45rem`,
    }}
  >
    <div
    >
      <h1
        className ="header">
        <div
        className="headerSpace"></div>
         <Link
          to="/"
          className ="linkHeader"
        >
        HOME
        </Link>
        <Link
          to="/"
          className ="linkHeader"
        >
          {siteTitle}
        </Link>
        <Link
          to="/about/"
          className ="linkHeader"
        >
          ABOUT
        </Link>
        <Link
          to="https://nottheaveragejo.github.io/personal-website/"
          className ="linkHeader"
        >
          PORTFOLIO
        </Link>
        <Link
          to="/contact"
          className ="linkHeader"
        >
        CONTACT
        </Link>
        {/* <link rel="https://nottheaveragejo.github.io/personal-website/">  website</link> */}

      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
