import React from "react"
import ProductCard from "../productCard"
import arrow from "../../images/arrow.svg"
import { navigate } from "@reach/router"
import {
  CategoryScrollerSection,
  ScrollerHeader,
  ScrollerHeaderTitle,
  ScrollerHeaderLink,
  ScrollerHeaderLinkWrapper,
  ScrollerWrapper,
} from "./styledComponents"

const CategoryScroller = ({ products, title, pageUrl }) => {
  return (
    <CategoryScrollerSection>
      <ScrollerHeader>
        <ScrollerHeaderTitle>{title}</ScrollerHeaderTitle>
        <ScrollerHeaderLinkWrapper>
          <ScrollerHeaderLink onClick={() => navigate(`${pageUrl}`)}>
            <b>VIEW ALL</b> <img src={arrow} alt="Arrow" />
          </ScrollerHeaderLink>
        </ScrollerHeaderLinkWrapper>
      </ScrollerHeader>
      <ScrollerWrapper>
        {products.slice(0, 5).map(({ node }) => {
          return <ProductCard node={node} key={node.id} />
        })}
      </ScrollerWrapper>
    </CategoryScrollerSection>
  )
}

export default CategoryScroller
