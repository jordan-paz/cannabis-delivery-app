import React from "react"
import weed from "../../images/can.jpg"
import CardContent from "@material-ui/core/CardContent"
import { navigate } from "@reach/router"
import AddToCartButton from "./addToCartButton"
import {
  StyledCard,
  ProductCardImg,
  ProductCardImgWrapper,
  ProductCardPreview,
  ProductCardName,
} from "./styledComponents"

const ProductCard = ({ product }) => {
  const { name, thc, id, image } = product
  return (
    <StyledCard>
      <CardContent>
        <ProductCardImgWrapper>
          <ProductCardImg
            src={image.url ? image.url : weed}
            onClick={() => navigate(`products/${id}`)}
          />
        </ProductCardImgWrapper>
        <div>
          <ProductCardPreview>
            <ProductCardName>{name}</ProductCardName>
            {thc ? <p>"THC:" + thc + "%" </p> : null}
          </ProductCardPreview>
          <AddToCartButton product={product} />
        </div>
      </CardContent>
    </StyledCard>
  )
}

export default ProductCard
