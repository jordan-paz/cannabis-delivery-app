import React from "react"
import AddToCartButton from "./addToCartButton"
import LazyLoad from "react-lazyload"
import {
  Card,
  ImgWrapper,
  DetailsWrapper,
  StyledImg,
  Title,
} from "./styledComponents"

export default ({ product }) => {
  const { name, image } = product
  return (
    <Card>
      <ImgWrapper to={`/products/${product.id}`}>
        <LazyLoad height={200}>
          <StyledImg src={image.url} alt={name} />
        </LazyLoad>
      </ImgWrapper>
      <DetailsWrapper>
        <Title to={`/products/${product.id}`}>
          <strong>{name}</strong>
        </Title>
        <AddToCartButton product={product} />
      </DetailsWrapper>
    </Card>
  )
}
