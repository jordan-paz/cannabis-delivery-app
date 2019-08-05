import React from "react"
import styled from "styled-components"
import weed from "../images/can.jpg"
import { Card } from "@material-ui/core"
import CardContent from "@material-ui/core/CardContent"
import addToCartIcon from "../images/add-to-cart.svg"
import { navigate } from "@reach/router"

const StyledCard = styled(Card)`
  .MuiCardContent-root {
    padding: 0;
  }
  max-width: 330px;
`

const ProductCardImg = styled.img`
  max-width: 100%;
`

const ProductCardPreview = styled.div`
  padding: 5px 15px 10px 15px;
  min-height: 60px;
  white-space: pre-line;

  p {
    overflow: hidden;
  }
`

const ProductCardName = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: var(--black);
`

const ProductContent = styled.a`
  :hover {
    cursor: pointer;
  }
`

const StyledAddToCartButton = styled.button`
  border: 2px solid var(--grey);
  margin: 0 10px 10px 10px;
  align-content: center;
  display: flex;
  background-color: #fff;
  color: var(--primary-color);
  border-radius: 5px;
  padding: 15px 25px;
  width: 90%;
  :hover {
    cursor: pointer;
  }
  :focus {
    outline: 0;
  }
  span {
    font-size: 18px;
    font-weight: bold;
    margin: 0 auto;
  }
  img {
    max-width: 23px;
    margin: 0 auto;
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
    <StyledCard>
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
    </StyledCard>
  )
}

export default ProductCard
