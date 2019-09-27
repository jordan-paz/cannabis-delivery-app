import styled from "styled-components"
import { Link } from "gatsby"

export const ScrollerWrapper = styled.div`
  align-self: flex-start;
  width: 100%;
  max-width: 1100px;
  padding-left: 10px;
  padding-bottom: 30px;
  margin-bottom: 20px;
  border-bottom: 1px solid #d8dee3;
  @media only screen and (min-width: 800px) {
    width: 80%;
    align-self: center;
  }
`

export const Scroller = styled.div`
  overflow-x: scroll;
  white-space: nowrap;
  width: 100%;
`
export const Title = styled.h2`
  display: inline-block;
`

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
`

export const ViewAllLink = styled(Link)`
  margin: auto 20px auto auto;
`

export const CardContainer = styled.div`
  margin: 5px;
  display: inline-block;
  height: 300px;
  width: 180px;
  @media only screen and (min-width: 800px) {
    height: 300px;
    width: 180px;
  }
  @media only screen and (min-width: 1000px) {
    height: 350px;
    width: 210px;
  }
`
