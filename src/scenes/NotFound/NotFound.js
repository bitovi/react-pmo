import React from 'react'
import { Link } from 'react-router-dom'

import heroImageSrc from 'place-my-order-assets/images/homepage-hero.jpg'

export default function NotFound() {
  return (
    <div className="homepage">
      <img alt="restaurant table with glasses" src={heroImageSrc} width="250" height="380" />
      <h1>Oops! Page Not Found</h1>
      <p>Something went wrong. The page you are looking for could not be found.</p>
      <p>
        <Link className="btn" role="button" to="/">Go Home</Link>
      </p>
    </div>
  )
}
