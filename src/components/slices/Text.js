import React from 'react'
import get from 'lodash/get'

const TextSlice = props => {
  const node = get(props, 'data.primary') || {}
  return <pre>{JSON.stringify(node, null, 4)}</pre>
}

TextSlice.propTypes = {}
TextSlice.defaultProps = {}

export default TextSlice
