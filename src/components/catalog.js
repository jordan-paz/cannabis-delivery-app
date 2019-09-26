import React from "react"
import styled from "styled-components"
import Card from "./catalogCard"
import BackButton from "./backButton"

const CatalogWrapper = styled.main`
  padding: 0 10px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  max-width: 700px;
  align-items: flex-start;
  @media only screen and (min-width: 1200px) {
    max-width: 950px;
  }
`

const Catalog = ({ products }) => {
  return (
    <CatalogWrapper>
      <BackButton />
      {products.map(product => {
        return <Card key={product.id} product={product} />
      })}
    </CatalogWrapper>
  )
}

export default Catalog
