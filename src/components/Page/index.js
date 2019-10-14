import React from 'react'
import { RichText } from 'prismic-reactjs'
import get from 'lodash/get'
import SEO from '../Seo'
import Layout from '../Layout'
import slices from '../slices'

const renderSlice = (slice, index) => {
  const Component = slices[slice.type]
  if (!Component) return null
  return Component ? <Component data={slice} key={index} /> : null
}

const Page = props => {
  const node = get(props, 'data.prismic.allPages.edges[0].node') || {}
  const { title, body } = node

  console.log(body)

  return (
    <Layout>
      {title && <SEO title={RichText.asText(title)} />}
      {body && body.map((slice, i) => renderSlice(slice, i))}
    </Layout>
  )
}

export default Page
