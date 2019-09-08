import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import DrawerMenu from "../drawerMenu"
import LocationBanner from "./locationBanner"
import Cart from "../cart"
import { HeaderWrapper, HeaderContent, HeaderLogo } from "./styledComponents"

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <DrawerMenu />
        <Link to="/">
          <HeaderLogo>
            <b>SCD</b>
          </HeaderLogo>
        </Link>
        <Cart />
      </HeaderContent>
      <LocationBanner />
    </HeaderWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
