import React from 'react'
import get from 'lodash/get'

const TextPlusImage = props => {
  const node = get(props, 'data.primary') || {}
  return <pre>{JSON.stringify(node, null, 4)}</pre>
}

TextPlusImage.propTypes = {}
TextPlusImage.defaultProps = {}

export default TextPlusImage
