import React from "react"
import styled from "styled-components"

const LocationBannerWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  background-color: var(--secondary-color);

  justify-content: center;
  align-items: center;
`

const StyledAnnouncement = styled.p`
  color: #fff;
`

const LocationBanner = () => {
  return (
    <LocationBannerWrapper>
      <StyledAnnouncement>Location goes here</StyledAnnouncement>
    </LocationBannerWrapper>
  )
}

export default LocationBanner
