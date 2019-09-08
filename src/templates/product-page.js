import React, { useContext, useEffect, useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import weed from "../images/can.jpg"
import addToCartIconWhite from "../images/add-to-cart-white.svg"
import BackButton from "../components/backButton"
import OrderContext from "../context/orderContext"

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const MainContent = styled.main`
  min-height: 400px;
  display: flex;
  width: 90%;
  flex-direction: column;
  align-items: flex-start;
  p {
    line-height: 24px;
    font-size: 17px;
  }
  button {
    align-self: center;
  }
`

const ProductImg = styled.img`
  max-width: 100%;
`

const StyledAddToCartButton = styled.button`
  position: fixed;
  bottom: 0;
  border: none;
  display: flex;
  flex-direction: row;
  margin: 20px auto;
  font-size: 15px;
  background-color: var(--secondary-color);
  color: #fff;
  border-radius: 5px;
  padding: 10px 30px;
  width: 90vw;
  height: 60px;
  :hover {
    cursor: pointer;
  }
  :focus {
    outline: 0;
  }
  span {
    font-size: 18px;
    font-weight: bold;
  }
`

const AddToCartButtonCart = styled.img`
  width: 25px;
`
const AddToCartButtonText = styled.span`
  margin: 0 auto;
`
const AddToCartButtonPrice = styled.span``

const AddToCartButton = ({ productId, price }) => {
  const { addToOrder } = useContext(OrderContext)
  return (
    <StyledAddToCartButton onClick={() => addToOrder(productId)}>
      <AddToCartButtonCart src={addToCartIconWhite} />
      <AddToCartButtonText>Add to Cart</AddToCartButtonText>
      <AddToCartButtonPrice>${price}</AddToCartButtonPrice>
    </StyledAddToCartButton>
  )
}

const ProductPage = ({ data: { product } }) => {
  const { price } = product.variants[0]

  const [compositeId, setCompositeId] = useState(undefined)

  useEffect(() => {
    setCompositeId(
      `${localStorage.companyId}-${localStorage.facilityId}-${product.productId}-${product.variants[0].id}`
    )
  })

  return (
    <Layout>
      <Main>
        <BackButton />
        <MainContent>
          <ProductImg src={product.image.url ? product.image.url : weed} />
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <AddToCartButton price={price} productId={compositeId} />
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
      productId
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
