import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../styles.css"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1
        className = 'PostTitle'
        >{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}



// export const query = graphql`
// query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug }, }) {
//       html
//       frontmatter {
//         title
//         date
//       }
//     }
//   }

 // featuredImage {
        //   childImageSharp {
        //     fluid(maxWidth: 800) {
        //       ...GatsbyImageSharpFluid
        //     }
        //   }
        // }
export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title

      }
    }
  }
 `
