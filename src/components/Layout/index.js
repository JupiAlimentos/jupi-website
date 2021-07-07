import React from 'react'
import PropTypes from 'prop-types'

import MenuBar from '../MenuBar'
import Footer from '../Footer'

import GlobalStyles from '../../styles/global'

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <MenuBar />
      <div>{children}</div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
