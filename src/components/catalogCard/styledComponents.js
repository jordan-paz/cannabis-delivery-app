import React from "react"
import styled from "styled-components"

export const CardWrapper = styled.div`
  display: flex;
  height: 300px;
  width: 47%;
  margin: 5px auto;
  max-width: 280px;
  @media only screen and (min-width: 600px) {
    height: 350px;
    width: 32%;
    max-width: 280px;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 1px solid #d8dee3;
  border-radius: 3px;
`

export const ImgWrapper = styled.div`
  height: 60%;
  width: 100%;
  display: flex;
  border-bottom: 1px solid #d8dee3;
`

export const DetailsWrapper = styled.div`
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40%;
  padding: 10px;
  background-color: #fbfcfc;
`

export const StyledImg = styled.img`
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  object-fit: contain;
  max-width: 100%;
`

export const StyledPrice = styled.span`
  display: block;
  color: #4597e0;
  font-size: 15px;
  margin-bottom: 12px;
`

export const Title = styled.span`
  width: 100%;
  white-space: normal;
  display: block;
  color: #333333;
  font-size: 14px;
  margin-bottom: 12px;
`

export const Badge = styled.div`
  display: flex;
  align-items: center;
  height: 17px;
  width: 51px;
  background-color: #eaeff4;
  border: 1px solid #b7c2d0;
  border-radius: 3px;
  padding: 3px;
  color: #606f7f;
  margin-bottom: 12px;
`

export const StyledStrainType = styled.span`
  font-size: 11px;
  margin-left: 5px;
`

export const StyledThc = styled.span`
  border-right: 1px solid #b7c2d0;
  font-size: 12px;
  padding-right: 5px;
  height: 5px;
`
export const StyledCbd = styled.span`
  font-size: 12px;
  padding-left: 5px;
`
