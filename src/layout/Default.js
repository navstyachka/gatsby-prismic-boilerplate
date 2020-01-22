import React from 'react'

// import '../styles/main.scss'
// import css from './styles.module.scss'
// import Head from '../Head'
import Menu from '../components/Menu'
// import TestGrid from "../TestGrid"

const Layout = ({ children, ...data }) => {
  return (
    <div className={`container `}>
      {/* {process.env.GATSBY_ENV === "development" && <TestGrid />} */}

      {/* <Head {...data} /> */}
      <Menu />
      <main>{children}</main>
    </div>
  )
}

export default Layout
