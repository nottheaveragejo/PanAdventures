
import React from "react"
import {Link, graphql } from "gatsby"
import Layout from "../components/layout"
import About from "../components/about"
import '../styles.css'

export default ({ data }) => {
  return (
    <Layout>
      <div className="frontPageWrapper">
        <div className="postsWrapper">
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}
          className="postStyling">
           <Link
              to={node.fields.slug}
              className="PostTitle">
            <h3
              className="title"
            >
              {node.frontmatter.title}{" "}
              <span className="date"
              >
                — {node.frontmatter.date}
              </span>
            </h3>
            </Link>
            <p>{node.excerpt}</p>
            <div className="ReadMoreBtn">
            <Link
              to={node.fields.slug}
              className="ReadMore"
              >
              READ MORE
            </Link>
            </div>
            <hr></hr>
          </div>
        ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
