const { registerLinkResolver } = require('gatsby-source-prismic-graphql')
const { previewLinkResolver } = require('./src/utils/linkResolver')
/**
 * We register `previewLinkResolver` here for preview setup
 */
registerLinkResolver(previewLinkResolver)
