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
        <ImgWrapper>
          <StyledImg src={image.url} />
        </ImgWrapper>
        <DetailsWrapper>
          <Title>
            <strong>{name}</strong>
          </Title>
          <AddToCartButton product={product} />
        </DetailsWrapper>
      </Card>
    </CardWrapper>
  )
}
