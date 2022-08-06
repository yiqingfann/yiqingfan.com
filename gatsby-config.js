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
    // 'gatsby-transformer-remark', // markdown
    { // markdown styles
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                // "heading[depth=1]": "text-orange-1",
                // "heading[depth=2]": "text-orange-1",
                // "heading[depth=3]": "text-orange-1",
                // "heading[depth=4]": "text-orange-1",
                // "heading[depth=5]": "text-orange-1",
                // "heading[depth=6]": "text-orange-1",
                // "paragraph": "text-white-1"
              }
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/src/blogs/`,
      },
    }, // files
  ],
}
