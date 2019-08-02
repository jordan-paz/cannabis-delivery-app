import React from "react"
import styled from "styled-components"
import weed from "../images/can.jpg"
import { Card } from "@material-ui/core"
import CardContent from "@material-ui/core/CardContent"
import { Link } from "gatsby"
import addToCartIcon from "../images/add-to-cart.svg"

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
`

const StyledAddToCartButton = styled.button`
  border: none;
  display: flex;
  align-items: center;
  font-size: 15px;
  background-color: #ddd;
  border-radius: 5px;
  padding: 10px 20px;
  :hover {
    cursor: pointer;
  }
  :focus {
    outline: 0;
  }
  span {
    padding-left: 15px;
    font-size: 15px;
    font-weight: bold;
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
    <Link to={`products/${id}`}>
      <Card>
        <CardContent>
          <ProductCardImg src={url ? url : weed} />
          <ProductCardPreview>
            <ProductCardName>{name}</ProductCardName>
            {thc ? <p>"THC:" + thc + "%" </p> : null}
          </ProductCardPreview>
          <AddToCartButton price={price} productId={id} />
        </CardContent>
      </Card>
    </Link>
  )
}

export default ProductCard
