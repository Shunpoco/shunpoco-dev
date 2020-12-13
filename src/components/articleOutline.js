import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const Outline = ({ slug, date, title, description }) => {

  return (
    <article
      className="post-list-item"
      itemScope
      itemType="http://schema.org/Article"
      style={{
        backgroundColor: `white`,
        padding: `20px`,
      }}
    >
      <Link to={slug} itemProp="url"
        style={{
          textDecoration: `none`,
          color: `hsla(0, 0%, 0%, 0.8)`,
        }}
      >
        <header>
          <span
            style={{
              background: `aliceblue`,
              padding: `6px`,
              borderRadius: `7px`,
              backgroundColor: `#ebbaa1`,
              color: `#ffffff`,
              fontSize: `13px`,
              fontWeight: `bold`,
              paddingTop: `3px`,
              paddingBottom: `3px`,
            }}
          >
            {date}
          </span>
          <h3>
              <span itemProp="headline">{title}</span>
          </h3>
        </header>
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: description
            }}
            itemProp="description"
          />
        </section>
      </Link>
    </article>
  );
}

Outline.propTypes = {
  slug: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Outline;
