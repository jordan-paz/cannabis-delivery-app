import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import DrawerMenu from "./drawerMenu"

const HeaderWrapper = styled.header`
  background: white;
  color: #333;
  position: fixed;
  left: 0;
  right: 0;
  height: 60px;
  top:0;
  }
`

const HeaderContent = styled.div`
  max-width: 930px;
  margin: 0 auto;
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`

const HeaderLogo = styled.div`
  max-height: 100%;
`

const ShoppingCart = styled.div`
  margin-right: 1rem;
  max-height: 100%;
`

const Header = () => (
  <HeaderWrapper>
    <HeaderContent>
      <DrawerMenu />
      <HeaderLogo>
        <Link to="/">SCD</Link>
      </HeaderLogo>
      <ShoppingCart>Cart</ShoppingCart>
    </HeaderContent>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
