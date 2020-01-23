import React from 'react'

// import '../styles/main.scss'
// import css from './styles.module.scss'
// import Head from '../Head'
import GlobalStyle from '../styles/global'
import Menu from './Menu'
// import TestGrid from '../TestGrid'

const Layout = ({ children, ...data }) => {
  return (
    <div className={`container `}>
      <GlobalStyle />
      {/* {process.env.GATSBY_ENV === 'development' && <TestGrid />} */}

      {/* <Head {...data} /> */}
      <Menu />
      <main>{children}</main>
    </div>
  )
}

export default Layout
