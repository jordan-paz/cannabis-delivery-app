import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import DrawerMenu from "./drawerMenu"
import LocationBanner from "../components/locationBanner"
import CartModal from "../components/cartModal"
import { AuthContext } from "../context/authContext"

const HeaderWrapper = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  height: 45px;
  top: 0;
  background-color: var(--bg-color);
`

const HeaderContent = styled.div`
  max-width: 930px;
  margin: 0 auto;
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`

const HeaderLogo = styled.h2`
  color: var(--primary-color);
`

const Header = () => (
  <AuthContext.Consumer>
    {context => (
      <HeaderWrapper>
        <HeaderContent>
          <DrawerMenu />
          <Link to="/">
            <HeaderLogo>
              <b>SCD</b>
            </HeaderLogo>
          </Link>
          {context.loggedIn ? <CartModal /> : <Link to={"/login"}>Login</Link>}
        </HeaderContent>
        <LocationBanner />
      </HeaderWrapper>
    )}
  </AuthContext.Consumer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
