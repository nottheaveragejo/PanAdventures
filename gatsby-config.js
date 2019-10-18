module.exports = {
  pathPrefix: "/PanAdventures",
  siteMetadata: {
    title: `The Adventures of Pan and Ice`,
    description: `The Story of Two Bears and a Dream`,
    author: `@gatsbyjs`,
  },
  plugins: [
   {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,

    `gatsby-transformer-sharp`,
     {resolve: `gatsby-transformer-remark`,
     options: {
       plugins: [`gatsby-remark-copy-linked-files`]}},
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        //path: path.join(__dirname, `src`, `images`),
        path: `${__dirname}/src/pages`,
        // name: `images`,
        // path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `PanAdventures`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/pages/blogPic.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}


