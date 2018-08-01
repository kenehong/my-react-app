import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to <br /> design and code React apps</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        <Link to="/page-2/">Go to page 2</Link>
      </div>    
    </div>
    <div className="Cards">
      <h2>11 course, more coming</h2>
      <div className="CardGroup">
          <Card 
          title="React for Designers"
          text="12 sections"
          image={require('../images/wallpaper.jpg')} />
          <Card 
          title="Second Card"
          text="12 sections"
          image={require('../images/wallpaper2.jpg')} />
          <Card 
          title="Third Card"
          text="12 sections"
          image={require('../images/wallpaper3.jpg')} />
          <Card 
          title="Fourth Card"
          text="12 sections"
          image={require('../images/wallpaper4.jpg')} />
        </div>
    </div>
  </div>
)

export default IndexPage
