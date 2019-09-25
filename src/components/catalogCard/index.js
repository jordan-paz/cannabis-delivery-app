import React from "react"
import AddToCartButton from "./addToCartButton"
import {
  Card,
  CardWrapper,
  ImgWrapper,
  DetailsWrapper,
  StyledImg,
  Title,
} from "./styledComponents"

export default ({ product }) => {
  const { name, image } = product
  return (
    <CardWrapper>
      <Card>
        <ImgWrapper to={`/products/${product.id}`}>
          <StyledImg src={image.url} alt={name} />
        </ImgWrapper>
        <DetailsWrapper>
          <Title to={`/products/${product.id}`}>
            <strong>{name}</strong>
          </Title>
          <AddToCartButton product={product} />
        </DetailsWrapper>
      </Card>
    </CardWrapper>
  )
}
