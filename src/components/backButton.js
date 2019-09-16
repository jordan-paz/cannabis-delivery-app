import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import backArrow from "../images/back-arrow.svg"

const BackButtonWrapper = styled.header`
  margin-top: 110px;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  width: 100%;
  height: 60px;
`
const StyledLink = styled(Link)`
  margin-left: 20px;
  display: flex;
  align-content: center;
  span {
    padding-top: 2px;
    padding-left: 2px;
  }
  :hover {
    cursor: pointer;
  }
`

const BackButton = ({ category }) => (
  <BackButtonWrapper>
    <StyledLink to="/">
      <img src={backArrow} alt="Backwards arrow" />
      <span>
        <b>BACK</b>
      </span>
    </StyledLink>
  </BackButtonWrapper>
)

export default BackButton
