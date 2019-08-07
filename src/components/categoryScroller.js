import React from "react"
import styled from "styled-components"
import ProductCard from "./productCard"
import arrow from "../images/arrow.svg"
import { navigate } from "@reach/router"

const CategoryScrollerSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 97%;
  padding-bottom: 2rem;
  border-bottom: solid 2px #ddd;
  color: var(--black);
`

const ScrollerHeader = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
`

const ScrollerHeaderTitle = styled.h1`
  font-size: 35px;
  justify-self: flex-start;
  padding-left: 2px;
  border-bottom: 6px solid var(--primary-color);
  border-length: 20px;
  line-height: 50px;
`

const ScrollerHeaderLink = styled.span`
  display: flex;
  align-items: center;
  color: var(--primary-color);
  img {
    margin-left: 10px;
  }
`

const ScrollerHeaderLinkWrapper = styled.span`
  margin-left: auto;
  padding-right: 15px;
  :hover {
    cursor: pointer;
  }
`

const ScrollerWrapper = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  width: 100%;
  padding: 2px;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(10, calc(42%));
`

const CategoryScroller = ({ products, title }) => {
  return (
    <CategoryScrollerSection>
      <ScrollerHeader>
        <ScrollerHeaderTitle>{title}</ScrollerHeaderTitle>
        <ScrollerHeaderLinkWrapper>
          <ScrollerHeaderLink
            onClick={() =>
              navigate(
                `${title
                  .split(" ")
                  .join("")
                  .toLowerCase()}`
              )
            }
          >
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
