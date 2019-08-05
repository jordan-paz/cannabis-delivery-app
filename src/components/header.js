import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import DrawerMenu from "./drawerMenu"
import shoppingCart from "../images/shopping-cart.svg"
import LocationBanner from "../components/locationBanner"
import CartModal from "../components/cartModal"

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
  <>
    <HeaderWrapper>
      <HeaderContent>
        <DrawerMenu />
        <Link to="/">
          <HeaderLogo>
            <b>SCD</b>
          </HeaderLogo>
        </Link>
        <CartModal />
      </HeaderContent>
      <LocationBanner />
    </HeaderWrapper>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
