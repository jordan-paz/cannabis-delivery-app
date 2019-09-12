import React from "react"
import GlobalStyle from "../styles/global"
import Header from "./header"
import Footer from "./footer"
import Cart from "./cart"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Cart />
      {children}
      <Footer />
    </>
  )
}

export default Layout
