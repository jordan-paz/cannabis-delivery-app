import React from "react"
import styled from "styled-components"
import weed from "../images/can.jpg"
import { Card } from "@material-ui/core"
import CardContent from "@material-ui/core/CardContent"
import addToCartIcon from "../images/add-to-cart.svg"
import { navigate } from "@reach/router"
import AddToCartButton from "./addToCartButton"

const StyledCard = styled(Card)`
  .MuiCardContent-root {
    padding: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

const ProductCardImg = styled.img`
  width: 100%;
`

const ProductCardImgWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
`

const ProductCardPreview = styled.div`
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

const ProductCardName = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: var(--black);
`

const ProductCard = ({
  node: { productId, name, type, thc, id, image, variants },
}) => {
  const { url } = image
  const { price } = variants[0]

  const compositeId = `${localStorage.companyId}-${localStorage.facilityId}-${productId}-${variants[0].id}`
  return (
    <StyledCard>
      <CardContent>
        <ProductCardImgWrapper>
          <ProductCardImg
            src={url ? url : weed}
            onClick={() => navigate(`products/${id}`)}
          />
        </ProductCardImgWrapper>
        <div>
          <ProductCardPreview>
            <ProductCardName>{name}</ProductCardName>
            {thc ? <p>"THC:" + thc + "%" </p> : null}
          </ProductCardPreview>
          <AddToCartButton price={price} productId={compositeId} />
        </div>
      </CardContent>
    </StyledCard>
  )
}

export default ProductCard
