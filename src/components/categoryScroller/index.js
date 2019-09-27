import React from "react"

import ProductCard from "../productCard"
import {
  Title,
  HeaderWrapper,
  Scroller,
  ScrollerWrapper,
  ViewAllLink,
  CardContainer,
} from "./styledComponents"

export default ({ products, title, pageUrl }) => {
  return (
    <ScrollerWrapper>
      <HeaderWrapper>
        <Title>{title}</Title>
        <ViewAllLink to={`${pageUrl}`}>View all</ViewAllLink>
      </HeaderWrapper>

      <Scroller>
        {products.slice(0, 7).map(product => {
          return (
            <CardContainer>
              <ProductCard product={product} key={product.id} />
            </CardContainer>
          )
        })}
      </Scroller>
    </ScrollerWrapper>
  )
}
