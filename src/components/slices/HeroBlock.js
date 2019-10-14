import React from 'react'
import get from 'lodash/get'

const HeroSlice = props => {
  const node = get(props, 'data.primary') || {}
  return <pre>{JSON.stringify(node, null, 4)}</pre>
}

HeroSlice.propTypes = {}
HeroSlice.defaultProps = {}

export default HeroSlice
