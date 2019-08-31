import styled from "styled-components"
import { Card } from "@material-ui/core"

export const StyledCard = styled(Card)`
  .MuiCardContent-root {
    padding: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const ProductCardImg = styled.img`
  width: 100%;
`

export const ProductCardImgWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
`

export const ProductCardPreview = styled.div`
  padding: 5px 15px 10px 15px;
  min-height: 60px;
  white-space: pre-line;
  p {
    overflow: hidden;
  }
  :hover {
    cursor: pointer;
  }
`

export const ProductCardName = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: var(--black);
`
