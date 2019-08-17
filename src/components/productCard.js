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
    <img src={addToCartIcon} alt="Add to cart" />
    <span>${price}</span>
  </StyledAddToCartButton>
)

const ProductCard = ({ node: { name, type, thc, id, image, variants } }) => {
  const { url } = image
  const { price } = variants[0]
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
          <AddToCartButton price={price} productId={id} />
        </div>
      </CardContent>
    </StyledCard>
  )
}

export default ProductCard
