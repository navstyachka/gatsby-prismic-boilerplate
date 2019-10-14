import React from 'react'
import get from 'lodash/get'

const Quote = props => {
  const node = get(props, 'data.primary') || {}
  return <pre>{JSON.stringify(node, null, 4)}</pre>
}

Quote.propTypes = {}

export default Quote
