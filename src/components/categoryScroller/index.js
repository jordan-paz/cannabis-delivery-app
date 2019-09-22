import React from "react"

import ProductCard from "../productCard"
import {
  Title,
  HeaderWrapper,
  Scroller,
  ScrollerWrapper,
  ViewAllLink,
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
          return <ProductCard product={product} key={product.id} />
        })}
      </Scroller>
    </ScrollerWrapper>
  )
}
