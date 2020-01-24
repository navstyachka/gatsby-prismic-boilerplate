import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/Layout'

export const query = graphql`
  query PostQuery($uid: String) {
    prismic {
      post: allPosts(uid: $uid) {
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
            heading
            intro
            body
          }
        }
      }
    }
  }
`

export default props => {
  const data = get(props, 'data.prismic.post.edges[0].node')

  return (
    <Layout {...data}>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout>
  )
}
