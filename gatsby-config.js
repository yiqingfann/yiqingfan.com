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
    {
      resolve: `gatsby-transformer-remark`, // markdown meta info
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-highlight-code`, // markdown code block styles
          },
          {
            resolve: `gatsby-remark-classes`, // markdown styles
            options: {
              classMap: {
                // "heading[depth=1]": "text-orange-1",
                // "paragraph": "text-white-1"
              }
            }
          },
          {
            resolve: `gatsby-remark-images`, // makrdown images
            options: {
              // maxWidth: 590,
            },
          },
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`, // files
      options: {
        name: `blogs`,
        path: `${__dirname}/src/blogs/`,
      },
    },
  ],
}
