import React, { useEffect, useState } from "react"
import styled from "styled-components"
import weed from "../images/can.jpg"

const ProductCardWrapper = styled.div`
  border: solid 1px black;
`

const ProductCardImg = styled.img`
  max-width: 100%;
`

const ProductCardText = styled.div`
  padding: 2px 16px;
`

const ProductCard = () => (
  <ProductCardWrapper>
    <ProductCardImg src={weed} />
    <ProductCardText>
      <h3>
        <b>Weed</b>
      </h3>
      <p>$25.00</p>
    </ProductCardText>
  </ProductCardWrapper>
)

export default ProductCard
