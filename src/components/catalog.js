import React from "react"
import styled from "styled-components"
import ProductCard from "./productCard"

const CatalogWrapper = styled.main`
  display: grid;
  justify-content: center;
  grid-template-columns: 40vw 40vw;
  grid-gap: 20px;
`

const Catalog = ({ edges }) => {
  return (
    <CatalogWrapper>
      {edges.map(({ node }) => {
        return <ProductCard key={node.id} node={node} />
      })}
    </CatalogWrapper>
  )
}

export default Catalog
