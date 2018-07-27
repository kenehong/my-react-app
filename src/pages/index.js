import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Kenny Hong</h1>
        <p>We can change this.</p>
        <Link to="/page-2/">Go to page 2</Link>
      </div>    
    </div>
  </div>
)

export default IndexPage
