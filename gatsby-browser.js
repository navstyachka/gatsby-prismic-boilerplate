import React from 'react'
import { registerLinkResolver } from 'gatsby-source-prismic-graphql'
import { ThemeProvider } from 'styled-components'

import { previewLinkResolver } from './src/utils/linkResolver'
import { theme } from './src/styles/vars'

/**
 * We register `previewLinkResolver` here for preview setup
 */
registerLinkResolver(previewLinkResolver)

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)
