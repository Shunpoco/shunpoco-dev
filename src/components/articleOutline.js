import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const Outline = ({ slug, date, title, description }) => {
  return (
    <article
      className="post-list-item"
      itemScope
      itemType="http://schema.org/Article"
    >
      <header>
        <h2>
          <Link to={slug} itemProp="url">
            <span itemProp="headline">{title}</span>
          </Link>
        </h2>
        <small>{date}</small>
      </header>
      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: description
          }}
          itemProp="description"
        />
      </section>
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
