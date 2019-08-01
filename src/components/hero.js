import React from "react"
import styled from "styled-components"
import weedBackground from "../images/weed-background.jpg"

const HeroWrapper = styled.div`
  display: flex;
  margin-top: 60px;
  width: 100%;
  height: 30vh;
  background-color: #eee;
  justify-content: center;
  align-items: center;
`

const StyledAnnouncement = styled.p`
  color: #000;
`

const CallToActionButton = styled.button`
  grid-area: callToAction;
  width: 200px;
  height: 60px;
  border: solid 2px #000;
`

const Hero = () => {
  return (
    <HeroWrapper>
      <StyledAnnouncement>Promo goes here</StyledAnnouncement>
    </HeroWrapper>
  )
}

export default Hero
