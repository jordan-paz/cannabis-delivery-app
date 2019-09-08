import React, { useContext } from "react"
import { StyledMenuList, StyledListSpan } from "./styledComponents"
import AuthContext from "../../context/authContext"
import { Link } from "gatsby"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"

export default ({ toggleDrawer }) => {
  const { logout } = useContext(AuthContext)

  return (
    <StyledMenuList
      role="navigation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[
          "Flower",
          "Vaporizers",
          "Concentrates",
          "Tinctures",
          "Edibles",
          "Prerolls",
          "Gear",
        ].map(text => (
          <Link to={`/${text.toLowerCase().replace(/\s+/g, "")}`} key={text}>
            <ListItem>
              <StyledListSpan>{text.toUpperCase()}</StyledListSpan>
            </ListItem>
          </Link>
        ))}
        <ListItem>
          <StyledListSpan onClick={logout}>logout</StyledListSpan>
        </ListItem>
      </List>
    </StyledMenuList>
  )
}
