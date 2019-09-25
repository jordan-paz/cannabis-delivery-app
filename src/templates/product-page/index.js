import React, { useContext } from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import weed from "../../images/can.jpg"
import addToCartIconWhite from "../../images/add-to-cart-white.svg"
import BackButton from "../../components/backButton"
import OrderContext from "../../context/orderContext"
import {
  StyledAddToCartButton,
  AddToCartButtonText,
  AddToCartButtonPrice,
  Main,
  MainContent,
  ProductImg,
  AddToCartButtonCart,
  UnitWeightBadge,
} from "./styledComponents"

const AddToCartButton = ({ product }) => {
  const { addToOrder } = useContext(OrderContext)
  return (
    <StyledAddToCartButton onClick={() => addToOrder(product)}>
      <AddToCartButtonCart src={addToCartIconWhite} />
      <AddToCartButtonText>Add to Cart</AddToCartButtonText>
      <AddToCartButtonPrice>${product.variants[0].price}</AddToCartButtonPrice>
    </StyledAddToCartButton>
  )
}

const ProductPage = ({ data: { product } }) => {
  return (
    <Layout>
      <Main>
        <BackButton />
        <MainContent>
          <ProductImg src={product.image.url ? product.image.url : weed} />
          <h1>{product.name}</h1>
          <UnitWeightBadge>
            <strong>
              {product.variants[0].unitWeight}
              {product.variants[0].unit}
            </strong>
          </UnitWeightBadge>
          <p>{product.description}</p>
          <AddToCartButton product={product} />
        </MainContent>
      </Main>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    product(id: { eq: $id }) {
      type
      category {
        name
      }
      subCategory {
        name
      }
      description
      featured
      compositeId
      id
      image {
        url
      }
      name
      variants {
        id
        price
        productId
        unitWeight
        unit
        flavor
        description
      }
    }
  }
`

export default ProductPage
