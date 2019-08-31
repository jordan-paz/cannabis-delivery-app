import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import DrawerMenu from "./drawerMenu"
import LocationBanner from "./locationBanner"
import CartModal from "./cart"
import { AuthContext } from "../../context/authContext"
import { HeaderWrapper, HeaderContent, HeaderLogo } from "./styledComponents"

const Header = () => {
  const { loggedIn } = useContext(AuthContext)
  return (
    <HeaderWrapper>
      <HeaderContent>
        <DrawerMenu />
        <Link to="/">
          <HeaderLogo>
            <b>SCD</b>
          </HeaderLogo>
        </Link>
        {loggedIn ? <CartModal /> : <Link to={"/login"}>Login</Link>}
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
