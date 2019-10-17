import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {Component} from "react"
import "../styles.css"

class Header extends Component {
  constructor(props) {
  	super(props);
    this.state = {
    color:''};
  }

  mouseOut() {
    console.log("Mouse out!!!");
    let color= '#484848'
    this.setState({
    color:color});
  }

  mouseOver() {
    let colors = [
      '#6c307c',
      '#893d67',
      '#9f4951',
      '#b8564b',
      '#c16c32'
    ] ;
    let color = colors[Math.floor(Math.random()*colors.length)];
    this.setState({color: color})
    console.log("Mouse over!!!" , color);
  }
  render (){
    return(
  <header
    // style={{
    //   background: '#b2dfe1',
    //   marginBottom: `1.45rem`,
    // }}
  >
    <div>
      <h1
        className ="header">
         <Link
          to="/"
          className ="linkHeader"
          onMouseOut={() => this.mouseOut()}
           onMouseOver={() => this.mouseOver()}
           style={{color : this.state.color}}
        >
        HOME
        </Link>
        <Link
          ref="linkColorChange"
          to="/about/"
          className ="linkHeader"
          onMouseOut={() => this.mouseOut()}
           onMouseOver={() => this.mouseOver()}
           style={{color : this.state.color}}
        >
          ABOUT
        </Link>
        <Link
          to="https://nottheaveragejo.github.io/personal-website/"
          className ="linkHeader"
          onMouseOut={() => this.mouseOut()}
          onMouseOver={() => this.mouseOver()}
          style={{color : this.state.color}}
        >
          PORTFOLIO
        </Link>
        <Link
          to="/contact"
          className ="linkHeader"
          onMouseOut={() => this.mouseOut()}
           onMouseOver={() => this.mouseOver()}
           style={{color : this.state.color}}
        >
        CONTACT
        </Link>
        {/* <link rel="https://nottheaveragejo.github.io/personal-website/">  website</link> */}

      </h1>
    </div>
  </header>
  )}
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
