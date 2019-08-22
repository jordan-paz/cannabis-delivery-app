import React from "react"
import PropTypes from "prop-types"
import GlobalStyle from "../styles/global"

import Header from "./header"
import Footer from "./footer"
import { AuthContext } from "../context/authContext"

const Layout = ({ children }) => {
  return (
    <AuthContext.Consumer>
      {context => (
        <>
          <GlobalStyle />
          <Header />
          {children}
          <Footer />
        </>
      )}
    </AuthContext.Consumer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
