import React from "react"
import MenuList from "./menuList"
import Bars from "../../images/menu-bars.svg"
import CloseX from "../../images/close-x-black.svg"
import {
  StyledDrawer,
  BarsWrapper,
  StyledNavBarButton,
  StyledCloseNavButton,
} from "./styledComponents"

export default () => {
  const [open, setOpen] = React.useState(false)

  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }
    setOpen(open)
  }

  const NavToggleButton = () => (
    <BarsWrapper>
      <StyledNavBarButton onClick={toggleDrawer(true)}>
        <img src={Bars} alt="collapsed nav menu" />
      </StyledNavBarButton>
    </BarsWrapper>
  )

  const CloseNavButton = () => (
    <StyledCloseNavButton
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <img src={CloseX} alt="Close menu" />
      <span>CLOSE</span>
    </StyledCloseNavButton>
  )

  return (
    <div>
      <NavToggleButton />
      <StyledDrawer open={open} onClose={toggleDrawer(false)}>
        <CloseNavButton />
        <MenuList toggleDrawer={toggleDrawer} />
      </StyledDrawer>
    </div>
  )
}
