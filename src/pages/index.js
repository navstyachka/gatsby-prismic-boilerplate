import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import { ReactComponent as Logo } from '../images/logo.svg'

export const query = graphql`
  query TestQuery {
    prismic {
      data: _allDocuments {
        edges {
          node {
            _meta {
              uid
              type
            }
          }
        }
      }
    }
  }
`

const PageContainer = ({
  data: {
    prismic: { data },
  },
}) => {
  return (
    <Layout {...data}>
      <Logo />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout>
  )
}

PageContainer.propTypes = {
  data: PropTypes.shape({
    prismic: PropTypes.shape({
      data: PropTypes.shape({}).isRequired,
    }).isRequired,
  }).isRequired,
}

export default PageContainer
