import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import get from 'lodash/get'

const Image = ({ image, fluid }) => {
  const sharpImage = fluid ? fluid.childImageSharp.fluid : null
  return sharpImage ? (
    <Img fluid={sharpImage} alt={image.alt} />
  ) : (
    <img src={get(image, 'url')} alt={image.alt} />
  )
}

Image.propTypes = {
  image: {
    dimensions: {
      height: PropTypes.number,
      width: PropTypes.number,
    },
    alt: PropTypes.string,
    copyright: PropTypes.string,
    url: PropTypes.string,
  },
  fluid: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fluid: PropTypes.object,
    }),
  }),
}

Image.defaultProps = {
  image: null,
  fluid: null,
}

export default Image
