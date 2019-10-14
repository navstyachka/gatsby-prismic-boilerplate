import React from 'react'
import PropTypes from 'prop-types'
import SEO from '../Seo'

const Layout = ({ children }) => {
  return (
    <div className="page">
      <SEO />
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
