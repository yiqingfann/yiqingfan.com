import React from "react"
// import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ title }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteInfo {
  //     site {
  //       siteMetadata {
  //         title
  //         description
  //         siteUrl
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <title>{title}</title>
    </>
  )
}

export default SEO