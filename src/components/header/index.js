import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import DrawerMenu from "../drawerMenu"
import LocationBanner from "./locationBanner"
import Login from "../login"
import AccountMenu from "../accountMenu"
import authContext from "../../context/authContext"

import {
  HeaderWrapper,
  HeaderContent,
  HeaderLogo,
  LoginWrapper,
} from "./styledComponents"

const Header = () => {
  const { loggedIn } = useContext(authContext)
  return (
    <HeaderWrapper>
      <HeaderContent>
        <DrawerMenu />
        <HeaderLogo>
          <Link to="/">
            <b>SCD</b>
          </Link>
        </HeaderLogo>
        {loggedIn ? (
          <LoginWrapper>
            <AccountMenu />
          </LoginWrapper>
        ) : (
          <LoginWrapper>
            <Login />
          </LoginWrapper>
        )}
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
