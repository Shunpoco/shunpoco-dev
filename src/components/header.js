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
      <h1 style={{ margin: 0, textAlign: `center`}}>
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
        <small style={{ color: `white` }}>
          <Link
            to="/"
            style={{
              color: `white`,
              fontWeight: `bold`,
            }}
          >
            Home
          </Link>
          &nbsp;|&nbsp;
          <Link
            to="/about"
            style={{
              color: `white`,
              fontWeight: `bold`,
            }}
          >
            About
          </Link>
        </small>
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
