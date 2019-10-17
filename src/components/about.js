import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import awesomeImg from '../pages/blogPic.jpg'
import '../styles.css'
import './about.css'

const About = () => (
 <div className="about">
  <h1 classname="aboutName">About Pan (Lisa)</h1>
  <img src={awesomeImg} className="aboutSide"/>
  <p> Writer. Programmer. Bike enthusiast. Never give up without a fight. </p>
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
      <li> C#  | </li>
      <li> Unity  | </li>
      <li> Vuforia |</li>
      <li> PHP  | </li>
      <li> Gatsby  | </li>
      <li> React | </li>
      <li> Redux  | </li>
      <li> Node | </li>
      <li> Express | </li>
      <li> EJS | </li>
      <li> Pug/Jade | </li>
      <li> Sequelize | </li>
      <li> MongoDB | </li>
      <li> PSQL | </li>
      <li> MySQL | </li>
      <li> Heroku | </li>
      <li> Now | </li>
      <li> AGILE | </li>
    </ul>
  </div>
 </div>
)


export default About
