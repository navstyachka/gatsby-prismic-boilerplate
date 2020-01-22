import React from 'react'
// import PropTypes from "prop-types"
import { graphql, StaticQuery, Link } from 'gatsby'
import { withPreview } from 'gatsby-source-prismic-graphql'

// import css from './styles.module.scss'
import linkResolver from '../../utils/linkResolver'

const query = graphql`
  query MenuQuery {
    prismic {
      data: navigation(uid: "navigation", lang: "en-gb") {
        menu: main_menu {
          link {
            _linkType
            ... on PRISMIC_Post {
              _meta {
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

const Menu = ({ menu }) => {
  const links = menu.filter(item => item.link)

  console.log('-=======', menu)

  return (
    <section>
      <nav>
        {links.map(
          ({ link }) =>
            link._meta && (
              <Link
                to={linkResolver.linkResolver(link._meta)}
                key={link._meta.uid}
              >
                {link._meta.uid}
              </Link>
            )
        )}
      </nav>
    </section>
  )
}

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

// Menu.propTypes = {
//   description: PropTypes.string,
//   lang: PropTypes.string,
//   meta: PropTypes.arrayOf(PropTypes.object),
//   title: PropTypes.string,
//   image: PropTypes.shape({
//     width: PropTypes.number.isRequired,
//     height: PropTypes.number.isRequired,
//     url: PropTypes.string.isRequired,
//   }),
// }

// Menu.defaultProps = {
//   lang: "en-gb",
//   meta: [],
//   title: "Page",
//   description: "",
//   image: undefined,
// }

export default MenuWithQuery
