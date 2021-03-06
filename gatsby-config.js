/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Lashas Recipes",
    description: "Nice and clean recipes site",
    author: "@lasha",
    person: {
      name: "john",
      age: 32,
    },
    simpleData: ["item 1", "item 2"],
    complexData: [
      {
        name: "john",
        age: 32,
      },
      {
        name: "lasha",
        age: 31,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
}
