import styled from "styled-components"
import { Link } from "gatsby"

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 1px solid #d8ded3;
  border-radius: 3px;
`

export const ImgWrapper = styled(Link)`
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

export const Title = styled(Link)`
  width: 100%;
  white-space: normal;
  display: block;
  color: #333333;
  font-size: 14px;
  margin-bottom: 12px;
`
