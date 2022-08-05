/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-postcss', // tailwindcss
    'gatsby-plugin-image', // image
    'gatsby-plugin-sharp', // image
    'gatsby-transformer-sharp', // image
    'gatsby-transformer-remark', // markdown
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/src/blogs/`,
      },
    }, // files
  ],
}
