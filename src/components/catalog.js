import React from "react"
import styled from "styled-components"
import ProductCard from "./productCard"

const CatalogWrapper = styled.main`
  display: grid;
  justify-content: center;
  grid-templet-colums: repeat(auto-fit, 200px);
  grid-gap: 20px;
`

const Catalog = () => {
  return (
    <CatalogWrapper>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </CatalogWrapper>
  )
}

export default Catalog
