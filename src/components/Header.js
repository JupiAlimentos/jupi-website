import React from 'react'

import config from '../../config'
import logo from '../assets/images/jupi_logo_site.svg'

export default function Footer () {
  return (
    <header id='header'>
      <h1>{config.heading} <img src={logo} alt={config.heading} /></h1>
      <p>
        {config.subHeading}
      </p>
    </header>
  )
}
