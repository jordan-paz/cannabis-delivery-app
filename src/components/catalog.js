import React from "react"
import styled from "styled-components"
import ProductCard from "./productCard"

const CatalogWrapper = styled.main`
  display: grid;
  justify-content: center;
  grid-template-columns: 43vw 43vw;
  grid-gap: 20px;
`

const Catalog = ({ edges }) => {
  edges.sort((a, b) => {
    if (a.node.name < b.node.name) {
      return -1
    }
    if (a.node.name > b.node.name) {
      return 1
    }
    return 0
  })

  return (
    <CatalogWrapper>
      {edges.map(({ node }) => {
        return <ProductCard key={node.id} node={node} />
      })}
    </CatalogWrapper>
  )
}

export default Catalog
