module.exports = {
  siteMetadata: {
    title: `Ayush@Machine`,
    description: `A blog where I keep all of my notes.`,
    author: `Ayush`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-plugin-less`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `tech-blog`,
        short_name: `tech-blog`,
        start_url: `/`,
        background_color: `#1e2127`,
        theme_color: `#1e2127`,
        display: `minimal-ui`,
        icon: `src/images/me.jpg`,
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow",
            },
          },
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: "Table of Contents",
              tight: false,
              ordered: false,
              fromHeading: 1,
              toHeading: 2,
              className: "table-of-contents",
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: { elements: [`h1`, `h2`] },
          },
          `gatsby-remark-prismjs`,
          {
            resolve: "gatsby-remark-embed-youtube",
            options: {
              width: 800,
              height: 400,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-page-progress",
      options: {
        excludePaths: ["/", "/blog", "/tags"],
        height: 5,
        prependToBody: false,
        color: `teal`,
        footerHeight: 500,
        headerHeight: 0,
      },
    },
  ],
}
