import React, { useEffect, useState } from "react"
import styled from "styled-components"
import weed from "../images/weed-background.jpg"

const ProductCardWrapper = styled.div`
  border: solid 1px #000;
  margin: 10px;
  display: inline-grid;
  grid-template-rows: 200px 70px;
`

const ProductCardImg = styled.img`
  max-height: 200px;
  width: 100%;
`

const ProductCardTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  margin-left: 10px;
  padding: 20px 0;
`

const ProductCard = () => (
  <ProductCardWrapper>
    <ProductCardImg src={weed} />
    <ProductCardTextWrapper>
      <h3>Weed</h3>
      <p>$25.00</p>
    </ProductCardTextWrapper>
  </ProductCardWrapper>
)

export default ProductCard
