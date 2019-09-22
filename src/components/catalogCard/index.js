import React from "react"
import AddToCartButton from "./addToCartButton"
import {
  Card,
  CardWrapper,
  ImgWrapper,
  DetailsWrapper,
  StyledImg,
  Title,
  StyledPrice,
} from "./styledComponents"

export default ({ product }) => {
  const { name, thc, id, image, variants } = product
  const { price } = variants[0]
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
