/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import About from "./about"
import "./layout.css"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <h1 className="siteName">{data.site.siteMetadata.title} </h1>
      <Header  />
      <div >
      <div className = "aboutPostsContainer">
      <div className="postsContainerMain">
      <main >{children}</main>
      </div>
      <About
      className="aboutContainer"
      ></About>
      </div>
        <footer>
          © {new Date().getFullYear()}, Built with Love, Creator Lisa J0
          {` `}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
