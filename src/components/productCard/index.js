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

const ProductCard = ({
  product: { productId, name, thc, id, image, variants },
}) => {
  const compositeId = `48-51-${productId}-${variants[0].id}`
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
          <AddToCartButton price={price} productId={compositeId} />
        </div>
      </CardContent>
    </StyledCard>
  )
}

export default ProductCard
