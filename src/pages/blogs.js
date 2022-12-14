import React from "react"
import Layout from '../components/Layout';
import { graphql, Link } from 'gatsby';
import Seo from '../components/Seo';

const Blogs = ({ data }) => {
  const blogs = data.allMarkdownRemark.nodes
  let blogsByYear = {}
  blogs.forEach(blog => {
    const year = blog.frontmatter.date.split(', ')[1]
    blogsByYear[year] = [...blogsByYear[year] || [], {
      id: blog.id,
      title: blog.frontmatter.title,
      date: blog.frontmatter.date,
      slug: blog.frontmatter.slug,
    }]
  })
  console.log(blogsByYear)
  const years = Object.keys(blogsByYear).reverse();
  console.log(years)

  return (
    <>
      <Seo title="Blogs | Yiqing Fan" />

      <Layout>
        <h1 className="page-title text-center">
          Blogs
        </h1>

        <p className="page-subtitle text-center mt-4">
          A place to share my thoughts.
        </p>

        {
          years.map(year => (
            <div key={year} className="mt-4">
              <div className="px-align-clickable">
                <div className="text-3xl text-orange-1 border-b-2 border-white-4 font-bold py-1">
                  {year}
                </div>
              </div>

              <div>
                {blogsByYear[year].map(blog => (
                  <Link
                    to={`/blogs/${blog.slug}`}
                    key={blog.id}
                    className="flex justify-between text-lg clickable mt-2"
                  >
                    <span className="text-white-1">{blog.title}</span>
                    <span className="text-white-2">{blog.date.split(', ')[0]}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))
        }
      </Layout >
    </>
  )
}

export default Blogs

export const query = graphql`
query AllBlogs {
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      id
      frontmatter {
        title
        slug
        date(formatString: "MMM DD, YYYY")
      }
    }
  }
}
`