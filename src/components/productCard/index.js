import React from "react"
import AddToCartButton from "./addToCartButton"
import LazyLoad from "react-lazyload"
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
          <LazyLoad height={200}>
            <StyledImg src={image.url} />
          </LazyLoad>
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
