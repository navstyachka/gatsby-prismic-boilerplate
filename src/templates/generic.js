import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/Layout'

export const query = graphql`
  query GenericQuery($uid: String) {
    prismic {
      generic: allGenerics(uid: $uid) {
        edges {
          node {
            _meta {
              id
              type
              uid
            }
            meta_title
            meta_description
            meta_image
          }
        }
      }
    }
  }
`

export default props => {
  const data = get(props, 'data.prismic.generic.edges[0].node')

  return (
    <Layout {...data}>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout>
  )
}
