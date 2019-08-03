import React from "react"
import styled from "styled-components"
import weed from "../images/can.jpg"
import { Card } from "@material-ui/core"
import CardContent from "@material-ui/core/CardContent"
import addToCartIcon from "../images/add-to-cart.svg"
import { navigate } from "@reach/router"

const ProductCardImg = styled.img`
  max-width: 100%;
`

const ProductCardPreview = styled.div`
  padding-top: 10px;
  min-height: 80px;
  white-space: pre-line;

  p {
    overflow: hidden;
  }
`

const ProductCardName = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: var(--primary-color);
`

const ProductContent = styled.a`
  :hover {
    cursor: pointer;
  }
`

const StyledAddToCartButton = styled.button`
  border: none;
  display: flex;
  align-items: center;
  font-size: 15px;
  background-color: #f2f1ed;
  color: var(--secondary-color);
  border-radius: 25px;
  padding: 10px 25px;
  width: 110px;
  :hover {
    cursor: pointer;
  }
  :focus {
    outline: 0;
  }
  span {
    font-size: 15px;
    font-weight: bold;
    padding-left: 15px;
  }
  img {
    max-width: 20px;
  }
`

const AddToCartButton = ({ price, productId }) => (
  <StyledAddToCartButton>
    <img src={addToCartIcon} />
    <span>${price}</span>
  </StyledAddToCartButton>
)

const ProductCard = ({ node: { name, type, thc, id, image, variants } }) => {
  const { url } = image
  const { price } = variants[0]
  return (
    <Card>
      <CardContent>
        <ProductContent onClick={() => navigate(`products/${id}`)}>
          <ProductCardImg src={url ? url : weed} />
          <ProductCardPreview>
            <ProductCardName>{name}</ProductCardName>
            {thc ? <p>"THC:" + thc + "%" </p> : null}
          </ProductCardPreview>
        </ProductContent>
        <AddToCartButton price={price} productId={id} />
      </CardContent>
    </Card>
  )
}

export default ProductCard
