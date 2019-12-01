import { Link } from "gatsby"
import ReactDOM from 'react-dom'
import PropTypes from "prop-types"
import React from "react"
import awesomeImg from '../pages/blogPic.jpg'
import '../styles.css'
import './about.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

// library.add(fab,faCoffee)
const About = () => (
 <div className="about">
  <h1 classname="aboutName">About Pan (Lisa)</h1>
  <img src={awesomeImg} className="aboutSide"/>
  <p> Writer. Programmer. Bike enthusiast. Never give up without a fight. </p>
  <div className="iconContainer">
    <a href="https://www.linkedin.com/in/lisa-jo/"><FontAwesomeIcon icon={['fab', 'linkedin']}  transform="grow-6"/>
    </a>
    <a href="https://www.instagram.com/notheaveragejo/"><FontAwesomeIcon icon={['fab', 'instagram']} transform="grow-6"/></a>
    <a href="https://www.facebook.com/lisaanne.jo"> <FontAwesomeIcon icon={['fab', 'facebook-square']} transform="grow-6"/></a>
    <a href="https://github.com/nottheaveragejo">
    <FontAwesomeIcon icon={['fab', 'github-alt']} transform="grow-6"/>
    </a>
  </div>


  <div className="ReadMoreBtn">
  <Link
    to='/about'
    className="ReadMore"
    >
    READ MORE
  </Link>
  </div>
  <hr className="readMoreTechHR"></hr>
  <h1>Technology</h1>

  <hr></hr>
  <div>
    <ul className = "technology">
      <li>HTML  | </li>
      <li> CSS  | </li>
      <li> JavaScript  | </li>
      <li> C#   </li>
      <li> Unity  | </li>
      <li> Vuforia |</li>
      <li> PHP  | </li>
      <li> Gatsby   </li>
      <li> React | </li>
      <li> Redux  | </li>
      <li> Node | </li>
      <li> Express  </li>
      <li> EJS | </li>
      <li> Pug/Jade | </li>
      <li> Sequelize  </li>
      <li> MongoDB | </li>
      <li> PSQL | </li>
      <li> MySQL  </li>
      <li> Heroku | </li>
      <li> Now | </li>
      <li> AGILE </li>
    </ul>
  </div>
 </div>
)


export default About
