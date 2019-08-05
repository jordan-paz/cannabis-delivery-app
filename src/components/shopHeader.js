import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import backArrow from "../images/back-arrow.svg"

const ShopHeaderWrapper = styled.header`
  margin-top: 110px;
  display: flex;
  flex-direction: column;
  align-content: center;
  left: 0;
  right: 0;
  height: 60px;
  span {
    padding-left: 5px;
  }
`

const ShopHeaderContent = styled.div`
  margin-left: 20px;
  p {
    display: inline;
  }
`

const StyledLink = styled(Link)`
  display: flex;
  align-content: center;
  span {
    padding-top: 2px;
  }
`

const ShopHeader = ({ category }) => (
  <div>
    <ShopHeaderWrapper>
      <ShopHeaderContent>
        <StyledLink to="/">
          <img src={backArrow} />
          <span>
            <b>BACK</b>
          </span>
        </StyledLink>
      </ShopHeaderContent>
    </ShopHeaderWrapper>
  </div>
)

export default ShopHeader
