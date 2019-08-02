import React from "react"
import styled from "styled-components"
import ProductCard from "./productCard"
import { Link } from "gatsby"
import arrow from "../images/arrow.svg"

const CategoryScrollerSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 97%;
  padding-bottom: 2rem;
  border-bottom: solid 1px #ddd;
`

const ScrollerHeader = styled.header`
  display: flex;
  width: 100%;
  margin-top: 40px;
  align-items: center;
`

const ScrollerHeaderTitle = styled.h2`
  justify-self: flex-start;
  padding-left: 2px;
`
const ScrollerHeaderLink = styled.span`
  display: flex;
  align-items: center;
`
const ScrollerHeaderLinkWrapper = styled.span`
  margin-left: auto;
  padding-right: 15px;
`

const ScrollerWrapper = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  width: 100%;
  padding: 2px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(5, calc(40%));
`

const CategoryScroller = ({ products, title }) => {
  return (
    <CategoryScrollerSection>
      <ScrollerHeader>
        <ScrollerHeaderTitle>{title}</ScrollerHeaderTitle>
        <ScrollerHeaderLinkWrapper>
          <Link to={`${title.toLowerCase()}`}>
            <ScrollerHeaderLink>
              View All <img src={arrow} />
            </ScrollerHeaderLink>
          </Link>
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
