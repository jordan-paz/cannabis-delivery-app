import React from "react"
import Card from "../productCard"
import BackButton from "../backButton"
import { CatalogWrapper, CardContainer } from "./styledComponents"

const Catalog = ({ products }) => {
  return (
    <CatalogWrapper>
      <BackButton />
      {products.map(product => {
        return (
          <CardContainer>
            <Card key={product.id} product={product} />
          </CardContainer>
        )
      })}
    </CatalogWrapper>
  )
}

export default Catalog
