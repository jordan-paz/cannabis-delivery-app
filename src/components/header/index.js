import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import DrawerMenu from "../drawerMenu"
import LocationBanner from "./locationBanner"
import Login from "../login"

import {
  HeaderWrapper,
  HeaderContent,
  HeaderLogo,
  LoginWrapper,
} from "./styledComponents"

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <DrawerMenu />
        <HeaderLogo>
          <Link to="/">
            <b>SCD</b>
          </Link>
        </HeaderLogo>
        <LoginWrapper>
          <Login />
        </LoginWrapper>
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
