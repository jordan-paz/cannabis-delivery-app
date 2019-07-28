import React from "react"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import { FaBars } from "react-icons/fa"
import styled from "styled-components"
import { Link } from "gatsby"

const BarsWrapper = styled.div`
  margin-left: 1rem;
  max-height: 100%;
  padding-top: 3px;
`

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false)

  const NavToggleButton = () => (
    <BarsWrapper>
      <button onClick={toggleDrawer(true)}>
        <FaBars
          style={{
            width: "1.5em",
            height: "1.5em",
          }}
        />
      </button>
    </BarsWrapper>
  )

  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }
    setOpen(open)
  }

  const MenuList = () => (
    <div
      role="navigation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button>
          <ListItemText primary="Shop" />
        </ListItem>
        <Divider />
        {["Flower", "Vaporizers", "Edibles", "Prerolls", "Gear"].map(text => (
          <Link to={`/${text.toLowerCase()}`}>
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  )

  return (
    <div>
      <NavToggleButton />
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <MenuList />
      </Drawer>
    </div>
  )
}
