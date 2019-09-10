import styled from "styled-components"
import Drawer from "@material-ui/core/Drawer"

export const StyledDrawer = styled(Drawer)`
  .MuiPaper-root {
    background-color: #fff;
    color: var(--black);
  }
`

export const BarsWrapper = styled.div`
  margin-left: 1rem;
  max-height: 100%;
  padding-top: 3px;
`

export const StyledNavBarButton = styled.button`
  border: none;
  background-color: #fff;
  :hover {
    cursor: pointer;
  }
  :focus {
    outline: 0;
  }
`

export const StyledCloseNavButton = styled.button`
  border: none;
  text-align: left;
  padding: 1rem 0 1rem 1.4rem;
  display: flex;
  align-items: center;
  font-size: 15px;
  color: var(--black);
  background-color: #fff;
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

export const StyledMenuList = styled.nav`
  width: 60vw;
`

export const StyledListSpan = styled.span`
  margin: 6px 6px;
  font-weight: bold;
  font-size: 20px;
  color: var(--black);
`
