import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery, Link as GatsbyLink } from 'gatsby'
import { withPreview } from 'gatsby-source-prismic-graphql'
import styled from 'styled-components'

// import css from './styles.module.scss'
import linkResolver from '../utils/linkResolver'

// data
// ==========================================================================================
const query = graphql`
  query MenuQuery {
    prismic {
      data: navigation(uid: "navigation", lang: "en-gb") {
        menu: main_menu {
          link {
            _linkType
            ... on PRISMIC_Post {
              meta: _meta {
                id
                uid
                type
              }
            }
          }
        }
      }
    }
  }
`

// styling
// ==========================================================================================
const Link = styled(GatsbyLink)`
  display: inline-block;
  margin: 50px;
`

// component
// ==========================================================================================
const Menu = ({ menu }) => {
  const links = menu.filter(item => item.link)

  console.log('-=======', menu)

  return (
    <section>
      <nav>
        {links.map(
          ({ link }) =>
            link.meta && (
              <Link
                to={linkResolver.linkResolver(link.meta)}
                key={link.meta.uid}
              >
                {link.meta.uid}
              </Link>
            )
        )}
      </nav>
    </section>
  )
}

Menu.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.shape({}).isRequired,
    })
  ).isRequired,

  // lang: PropTypes.string,
}

// Menu.defaultProps = {
//   lang: "en-gb",
//   meta: [],
//   title: "Page",
//   description: "",
//   image: undefined,
// }

// static query
// ==========================================================================================
const MenuWithQuery = () => (
  <StaticQuery
    // waiting for bug to be resolved https://github.com/birkir/gatsby-source-prismic-graphql/issues/70
    query={query}
    render={withPreview(
      ({ prismic: { data } }) => (
        <Menu {...data} />
      ),
      query
    )}
  />
)

export default MenuWithQuery
