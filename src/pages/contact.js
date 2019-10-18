import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../styles.css"


export default () => (
  <Layout>
    <div className="formContainer">
    <h1>Contact </h1>

    <p> If you enjoyed reading, want to collaborate, or any other
      inqueries please contact me through email. I'm always looking for
      someone to try new desserts, study algorithms, or have coffee dates with.
    </p>
    <form action="https://formspree.io/lisaxjo@gmail.com" method="POST">
      <label>Email</label>
      <input type="email" name="_replyto" placeholder="averagejo@example.com"/>
      <label> Message</label>
      <input type="text" name="name" placeholder="I <3 Bubble Tea"/>
      <button className="submitBtn" type="submit">Send</button>
    </form>
    </div>
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


