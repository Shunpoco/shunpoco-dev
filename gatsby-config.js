module.exports = {
  siteMetadata: {
    title: `Shunpoco.dev`,
    description: ``,
    author: `Shunpoco`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdowns`,
        name: `markdowns`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: 'G-W7L5E1R6RJ',
        head: false,
        anonymize: true,
      }
    },
  ],
}
