import React from 'react'
import { graphql } from 'gatsby'
import values from 'lodash/values'
// import Page from '../components/Page'
import * as Fragments from '../fragments/PageBodySlices'

export const query = graphql`
  query PageQuery($uid: String) {
    prismic {
      allPages(uid: $uid) {
        edges {
          node {
            _meta {
              uid
            }
            title
          }
        }
      }
    }
  }
`

const PageContainer = props => {
  const title = { props }
  return <div>Page {title}</div>
}
PageContainer.fragments = values(Fragments)

export default PageContainer
