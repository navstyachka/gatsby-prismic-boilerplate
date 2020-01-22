const path = require('path')
const { linkResolver } = require('./src/utils/linkResolver')

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   const templates = {
//     page: path.resolve(`src/templates/page.js`),
//   }
//   await graphql(`
//     {
//       prismic {
//         regularPages: allPages {
//           edges {
//             node {
//               _meta {
//                 uid
//                 lang
//                 type
//               }
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     if (result.errors) {
//       throw new Error(result.errors)
//     }
//     const { regularPages } = result.data.prismic
//     const pages = regularPages.edges
//     // .concat(textPages.edges)
//     pages.forEach(({ node }) => {
//       createPage({
//         path: linkResolver(node._meta),
//         component: templates[node._meta.type],
//         context: node._meta,
//       })
//     })
//   })
// }
