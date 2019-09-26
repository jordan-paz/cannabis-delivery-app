import styled from "styled-components"
import { Link } from "gatsby"

export const CardWrapper = styled.div`
  display: flex;
  height: 300px;
  width: 47%;
  margin: 5px auto;
  max-width: 280px;
  @media only screen and (min-width: 550px) {
    width: 32%;
    max-width: 220px;
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

export const ImgWrapper = styled(Link)`
  height: 60%;
  width: 100%;
  display: flex;
  border-bottom: 1px solid #d8dee3;
  justify-content: center;
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
  max-height: 100%;
`

export const Title = styled(Link)`
  width: 100%;
  white-space: normal;
  display: block;
  color: #333333;
  font-size: 13px;
  margin-bottom: 12px;
`
