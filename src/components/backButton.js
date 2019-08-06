import React from "react"
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

const BackButtonContent = styled.div``

const StyledLink = styled.span`
  margin-left: 20px;
  display: flex;
  align-content: center;
  span {
    padding-top: 2px;
    padding-left: 2px;
    color: var(--primary-color);
  }
  :hover {
    cursor: pointer;
  }
`

const BackButton = ({ category }) => (
  <BackButtonWrapper>
    <BackButtonContent>
      <StyledLink onClick={() => window.history.back()}>
        <img src={backArrow} alt="Backwards arrow" />
        <span>
          <b>BACK</b>
        </span>
      </StyledLink>
    </BackButtonContent>
  </BackButtonWrapper>
)

export default BackButton