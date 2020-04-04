import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import awesomeImg from './tea.jpg'
import "../styles.css"


export default ({ data }) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1>
    <img  className ="aboutPic" src= {awesomeImg } />

    <p>Thanks for reading my blog. I hope it makes you smile.</p>

    <p>
    In college, I studied pharmacology and neurobiology in hopes to become a
    pharmacist. It was only after getting accepted into pharmacy school and working
    at CVS in my senior year of college did I decide to jump ship. After much
    deliberation and trial and error, I set out to write my first novel, Overture.
    It was written after the spiritual experience of being at a Porter Robinson
    concert. All the mental blocks faded and the day after, I penned the first
    page. Pretty soon, I had a manuscript. But when I tried to get feedback for others
    to read it, I didn't have an audience. This was problematic, so I decided to
    build my own writing platform where fellow writers can critique and review other's work as well as receive feedback on their own. I was hooked. It was the beginning of my journey into software engineering, something I hope I can share with all of you.</p>

    <p>
      Currently, I live in the heart of the village in NYC with plently of plants
      and mementos of my travels. I think that noodles are the most under appreciated carb in existence and bike about 70 miles a week on a turkish green Brompton. When I'm not writing software and scripts, I'm working on my query letter for Overture.
    </p>

    <p>
      I spend my time wandering around in art galleries, nature, and random spots
      in NYC. The treasures you can find are stunning and amongst my favorite are
      30 plays in 60 minutes, the best rose lychee kakigori, and a snugly nestled
      stationary store.
    </p>

    <p>Thanks for reading my blog. I hope it makes you smile.</p>

    <p> All the best, Lisa </p>
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


