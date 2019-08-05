import React from "react"
import styled from "styled-components"

const LocationBannerWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  border-bottom: 1.6px solid var(--grey);
  border-top: 1.6px solid var(--grey);
`

const StyledAnnouncement = styled.p`
  color: var(--black);
  font-size: 15px;
`

const LocationBanner = () => {
  return (
    <LocationBannerWrapper>
      <StyledAnnouncement>
        Delivery to <b>3949 Orange Grove Ave</b>
      </StyledAnnouncement>
    </LocationBannerWrapper>
  )
}

export default LocationBanner
