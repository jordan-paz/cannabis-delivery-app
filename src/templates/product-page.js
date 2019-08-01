import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import weed from "../images/can.jpg"

const Main = styled.main`
  margin-top: 60px;
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
`

const ProductImg = styled.img`
  max-width: 100%;
`

const ProductPage = ({ data: { product } }) => {
  return (
    <Layout>
      <Main>
        <MainContent>
          <ProductImg src={product.image.url ? product.image.url : weed} />
          <h1>{product.name}</h1>
          <p>{product.type}</p>
          <p>{product.description}</p>
        </MainContent>
      </Main>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    product(id: { eq: $id }) {
      name
      type
      image {
        url
      }
      brand {
        name
      }
      description
      variants {
        flavor
        image {
          url
        }
        price
        unitWeight
        unit
      }
    }
  }
`

export default ProductPage
