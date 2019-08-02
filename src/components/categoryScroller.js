import React from "react"
import styled from "styled-components"
import ProductCard from "./productCard"

const CategoryScrollerSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 97%;
`

const ScrollerHeader = styled.header`
  display: flex;
  justify-items: flex-start;
  align-content: center;
  width: 100%;
  margin-top: 20px;
`

const ScrollerWrapper = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  width: 100%;
  padding: 10px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(5, calc(40%));
`

const CategoryScroller = ({ products, title }) => {
  return (
    <CategoryScrollerSection>
      <ScrollerHeader>
        <h2>{title}</h2>
      </ScrollerHeader>
      <ScrollerWrapper>
        {products.slice(0, 5).map(({ node }) => {
          return <ProductCard node={node} />
        })}
      </ScrollerWrapper>
    </CategoryScrollerSection>
  )
}

export default CategoryScroller
