import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Outline from '../components/articleOutline';

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;

  if (posts.length === 0) {
    return (<Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to my new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>)  
  }

  return (
    <Layout>
      <SEO title="Home" />
      <ol style={{ listStyle: `none` }}>
        {posts.map((post) => {
          const title = post.frontmatter.title;
          const slug = post.frontmatter.slug;
          const date = post.frontmatter.date;
          const description = post.frontmatter.description || post.excerpt;
          return (
            <li key={slug}>
              <Outline
                slug={slug}
                date={date}
                title={title}
                description={description}
              />
            </li>
          )
        })}
      </ol>
    </Layout>
  );
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        frontmatter {
          slug
          date(formatString: "YYYY-MM-DD")
          title
          description
        }
      }
    }
  }
`;
