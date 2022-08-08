import React from "react"
// import { useStaticQuery, graphql } from 'gatsby';

const Seo = ({ title }) => {
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

export default Seo