import React from 'react'
import get from 'lodash/get'
import Image from '../Image'

const FullBodyImage = props => {
  const node = get(props, 'data.primary') || {}
  const { image_full, image } = node
  return (
    <div className="image-full">
      {image && <Image fluid={image_full} image={image} />}
    </div>
  )
}

FullBodyImage.propTypes = {}
FullBodyImage.defaultProps = {}

export default FullBodyImage
