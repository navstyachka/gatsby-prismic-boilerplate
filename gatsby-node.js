const path = require('path')
const { linkResolver } = require('./src/utils/linkResolver')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const templates = {
    post: path.resolve(`src/templates/post.js`),
    generic: path.resolve(`src/templates/generic.js`),
  }
  const result = await graphql(`
    {
      prismic {
        post: allPosts(lang: "en-gb") {
          edges {
            node {
              meta: _meta {
                uid
                lang
                type
              }
            }
          }
        }
        generic: allGenerics(lang: "en-gb") {
          edges {
            node {
              meta: _meta {
                uid
                lang
                type
              }
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw new Error(result.errors)
  }

  const data = result.data.prismic
  Object.keys(data).forEach(key => {
    data[key].edges.forEach(({ node }) => {
      createPage({
        path: linkResolver(node.meta),
        component: templates[node.meta.type],
        context: { uid: node.meta.uid },
      })
    })
  })
}
