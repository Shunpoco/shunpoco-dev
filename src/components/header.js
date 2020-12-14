import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `linear-gradient(to right, purple, yellow)`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0, textAlign: `center`, marginBottom: `20px`,}}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div style={{ textAlign: `center` }}>
        <span style={{ color: `white`, fontWeight: `bold`, }}>
          <Link
            to="/"
            style={{
              color: `white`,
            }}
          >
            Home
          </Link>
          &nbsp;|&nbsp;
          <Link
            to="/about"
            style={{
              color: `white`,
            }}
          >
            About
          </Link>
        </span>
      </div>
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
