// import colors from 'styles/colors'
import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

const GlobalStyles = createGlobalStyle`
${styledNormalize}

  html,
  body {
    min-height: 100%;
  }

  body {
    width: 100%;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    * {
      box-sizing: border-box;

      &::selection {
          background: #000;
        color: #fff;
      }
    }
  }

  /*
    A workaround for forcing accessibility wrappers
    to have a 100% height.
    Reach Router issue here: https: //github.com/reach/router/issues/63
    */
  #___gatsby,
  div[role='group'][tabindex] {
    height: 100%;
    min-height: 100% !important;
  }
`

export default GlobalStyles
