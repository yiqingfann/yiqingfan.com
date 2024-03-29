/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Yiqing Fan`,
    description: `Yiqing Fan's personal website`,
    // siteUrl: `www.yiqingfan.com`,
  },
  plugins: [
    "gatsby-plugin-postcss", // tailwindcss
    "gatsby-plugin-image", // image
    "gatsby-plugin-sharp", // image
    "gatsby-transformer-sharp", // image
    {
      resolve: `gatsby-transformer-remark`, // markdown meta info
      options: {
        plugins: [
          "gatsby-remark-copy-linked-files",
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: "_blank",
              rel: "noopener noreferrer",
            },
          },
          {
            resolve: `gatsby-remark-highlight-code`, // markdown code block styles
          },
          {
            resolve: `gatsby-remark-classes`, // markdown styles
            options: {
              classMap: {
                // "heading[depth=1]": "text-orange-1",
                // "paragraph": "text-white-1"
              },
            },
          },
          {
            resolve: `gatsby-remark-images`, // makrdown images
            options: {
              maxWidth: 768,
            },
          },
        ],
      },
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
