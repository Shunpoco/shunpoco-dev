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
        path: `${__dirname}/contents/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `shunpoco-dev`,
        short_name: `shunpoco`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `contents/assets/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/contents/blog`,
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
