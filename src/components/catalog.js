import React from "react"
import styled from "styled-components"
import Card from "./catalogCard"

const CatalogWrapper = styled.main`
  padding: 0 10px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;
  align-items: flex-start;
  @media only screen and (min-width: 1200px) {
    max-width: 1100px;
  }
`

const Catalog = ({ products }) => {
  return (
    <CatalogWrapper>
      {products.map(product => {
        return <Card key={product.id} product={product} />
      })}
    </CatalogWrapper>
  )
}

export default Catalog
