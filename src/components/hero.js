import React from "react"
import styled from "styled-components"
import weedBackground from "../images/weed-background.jpg"

const HeroWrapper = styled.div`
  width: 100%;
  height: 80vh;
  background-color: #eee;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 50px auto 50px;
  grid-template-rows: auto;
  grid-template-areas:
    ". announcement ."
    ". callToAction .";
`

const StyledAnnouncement = styled.h1`
  grid-area: announcement;
  padding-top: 80px;
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
      <StyledAnnouncement>Treat Yourself</StyledAnnouncement>
      <CallToActionButton>SHOP</CallToActionButton>
    </HeroWrapper>
  )
}

export default Hero
