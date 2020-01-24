const config = require('./config')
const {
  previewLinkResolver,
  getPreviewDirectory,
} = require('./src/utils/linkResolver')

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://www.example.com',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === 'production'
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

module.exports = {
  siteMetadata: {
    siteUrl,
    title: `Prist | Gatsby & Prismic Starter`,
    description: `A starter powered by Gatsby and Prismic to showcase portfolios and blogs.`,
    author: `Marguerite Roth | marguerite.io`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-image',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sass',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-remove-trailing-slashes',
    'gatsby-plugin-purgecss',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: config.prismicRepoName,
        defaultLang: config.defaultLang,
        path: '/preview',
        previews: true,
        /**
         * The setup below renders only INTERNAL PREVIEW links
         * Pages used for the public website is created in `gatsby-node.js`
         * Make sure the `typesNeedUnpublishedPagePreview` in `src/prismic/linkResolver.js` is in sync with the options below.
         * Please do not add Single Type here as they usually are already published and you cannot create multiple instances for those types.
         */
        pages: [
          {
            type: 'Post',
            match: previewLinkResolver({ type: 'post', uid: ':uid' }),
            path: getPreviewDirectory('post'),
            component: require.resolve('./src/templates/post.js'),
          },
          {
            type: 'Generic',
            match: previewLinkResolver({ type: 'generic', uid: ':uid' }),
            path: getPreviewDirectory('generic'),
            component: require.resolve('./src/templates/generic.js'),
          },
        ],
        sharpKeys: [/image|photo|picture|logo/],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-prismic-starter-prist',
        short_name: `prist`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
        head: true,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/images/svg`,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: [
          '/preview',
          '/preview/**/*',
          '/internal-preview',
          '/internal-preview/**/*',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/*.js': [
            'Cache-Control: public, max-age=0, must-revalidate',
            'Content-Type: text/javascript',
          ],
        },
        mergeLinkHeaders: false,
        mergeCachingHeaders: false,
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#000',
      },
    },
  ],
}
