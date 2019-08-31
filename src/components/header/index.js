import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import DrawerMenu from "./drawerMenu"
import LocationBanner from "./locationBanner"
import CartModal from "./cart"
import { AuthContext } from "../../context/authContext"
import { HeaderWrapper, HeaderContent, HeaderLogo } from "./styledComponents"

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
