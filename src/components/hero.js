import React from "react"
import styled from "styled-components"

const HeroWrapper = styled.div`
  display: flex;
  margin-top: 60px;
  width: 100%;
  height: 25vh;
  background-color: #eee;
  justify-content: center;
  align-items: center;
`

const StyledAnnouncement = styled.p`
  color: #000;
`

const Hero = () => {
  return (
    <HeroWrapper>
      <StyledAnnouncement>Promo goes here</StyledAnnouncement>
    </HeroWrapper>
  )
}

export default Hero
