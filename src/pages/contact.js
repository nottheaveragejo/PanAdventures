import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"


export default ({ data }) => (
  <Layout>
    <h1>Contact </h1>

    <p>Thanks for reading my blog. I hope it makes you smile.</p>

    <p>
    In college, I studied pharmacology and neurobiology in hopes to become a
    pharmacist. It was only after getting accepted into pharmacy school and
    </p>

    <p>
      My favorite dog is a corgi. The project I am most proud is an AR mobile game
      called Apple Crumble. I draw inspiration from art galleries, nature, and observing world around me.
    </p>

    <p> Cheers! </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`


