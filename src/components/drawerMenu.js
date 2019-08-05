import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Bars from "../images/menu-bars.svg"
import CloseX from "../images/close-x-black.svg"

const StyledDrawer = styled(Drawer)`
  .MuiPaper-root {
    background-color: #fff;
    color: var(--black);
  }
`

const BarsWrapper = styled.div`
  margin-left: 1rem;
  max-height: 100%;
  padding-top: 3px;
`

const StyledNavBarButton = styled.button`
  border: none;
  :hover {
    cursor: pointer;
  }
  :focus {
    outline: 0;
  }
`
const StyledCloseNavButton = styled.button`
  border: none;
  text-align: left;
  padding: 1rem 0 1rem 1.4rem;
  display: flex;
  align-items: center;
  font-size: 15px;
  color: var(--black);
  :hover {
    cursor: pointer;
  }
  :focus {
    outline: 0;
  }
  span {
    padding-left: 10px;
    font-weight: bold;
  }
`

const StyledMenuList = styled.nav`
  width: 60vw;
  padding-left: 2rem;
`

const StyledListSpan = styled.span`
  margin: 6px 0;
  font-weight: bold;
  font-size: 20px;
  color: var(--black);
`

export default function TemporaryDrawer() {
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
        <img src={Bars} />
      </StyledNavBarButton>
    </BarsWrapper>
  )

  const CloseNavButton = () => (
    <StyledCloseNavButton
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <img src={CloseX} />
      <span>CLOSE</span>
    </StyledCloseNavButton>
  )

  const MenuList = () => (
    <StyledMenuList
      role="navigation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[
          "Buds",
          "Vaporizers",
          "Tinctures",
          "Topicals",
          "Edibles",
          "Prerolls",
          "Gear",
        ].map(text => (
          <Link to={`/${text.toLowerCase()}`} key={text}>
            <ListItem>
              <StyledListSpan>{text.toUpperCase()}</StyledListSpan>
            </ListItem>
          </Link>
        ))}
      </List>
    </StyledMenuList>
  )

  return (
    <div>
      <NavToggleButton />
      <StyledDrawer open={open} onClose={toggleDrawer(false)}>
        <CloseNavButton />
        <MenuList />
      </StyledDrawer>
    </div>
  )
}
