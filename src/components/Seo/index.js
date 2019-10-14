import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { graphql, StaticQuery } from 'gatsby'
import { withPreview } from 'gatsby-source-prismic-graphql'
import config from '../../../config'

function SEO({ description, lang, meta, title, image }) {
  const query = graphql`
    query SiteConfigurationQuery {
      prismic {
        seo: allSite_configurations(first: 1) {
          edges {
            node {
              site_title
              site_description
              site_preview_image
            }
          }
        }
      }
    }
  `
  return (
    <StaticQuery
      query={query}
      render={withPreview(({ prismic }) => {
        const { site_title, site_description, site_preview_image } = get(
          prismic,
          'seo.edges[0].node'
        ) || {
          site_title: false,
          site_description: false,
          site_preview_image: false,
        }

        const siteTitle = site_title || config.siteMetadata.title
        const metaDescription =
          description || site_description || config.siteMetadata.description

        const previewImage = image || {
          width: get(site_preview_image, 'dimensions.width'),
          height: get(site_preview_image, 'dimensions.height'),
          url: get(site_preview_image, 'url'),
        }

        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${siteTitle}`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property: `og:url`,
                content: `https://signals.vc`,
              },
              {
                property: `og:image`,
                content: previewImage.url,
              },
              {
                property: `og:image:width`,
                content: previewImage.width,
              },
              {
                property: `og:image:height`,
                content: previewImage.height,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: config.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
            ].concat(meta)}
          />
        )
      }, query)}
    />
  )
}

SEO.defaultProps = {
  lang: config.defaultLang,
  meta: [],
  title: 'Page',
  description: '',
  image: undefined,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  image: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
  }),
}

export default SEO
