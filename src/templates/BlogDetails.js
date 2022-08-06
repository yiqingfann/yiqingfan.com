import React from "react"
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

const BlogDetails = ({ data }) => {
  console.log(data)
  const { title, date } = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark

  return (
    <Layout>
      <div>
        <h1 className="page-title text-center">{title}</h1>
        <div className="page-subtitle text-center mt-4">{date}</div>

        {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
        <div dangerouslySetInnerHTML={{ __html: html }} className="prose markdown" />
      </div>
    </Layout>
  )
}

export default BlogDetails

export const query = graphql`
  query BlogDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
      }
      html
    }
  }
`