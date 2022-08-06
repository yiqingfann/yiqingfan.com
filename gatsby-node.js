const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query BlogSlugs {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: `/blogs/${node.frontmatter.slug}`,
      component: path.resolve("./src/templates/BlogDetails.js"),
      context: { slug: node.frontmatter.slug },
    })
  })
}



