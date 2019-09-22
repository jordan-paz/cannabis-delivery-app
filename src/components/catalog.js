import React from "react"
import styled from "styled-components"
import Card from "./catalogCard"

const CatalogWrapper = styled.main`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  max-width: 900px;
  @media only screen and (min-width: 1300px) {
    max-width: 1200px;
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
