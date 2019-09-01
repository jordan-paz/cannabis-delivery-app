import React from "react"
import styled from "styled-components"
import ProductCard from "./productCard"

const CatalogWrapper = styled.main`
  display: grid;
  justify-content: center;
  grid-template-columns: 43vw 43vw;
  grid-gap: 20px;
`

const Catalog = ({ products }) => {
  return (
    <CatalogWrapper>
      {products.map(product => {
        return <ProductCard key={product.id} product={product} />
      })}
    </CatalogWrapper>
  )
}

export default Catalog
