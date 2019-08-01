import React, { useEffect, useState } from "react"
import styled from "styled-components"
import weed from "../images/can.jpg"
import { Card } from "@material-ui/core"
import CardContent from "@material-ui/core/CardContent"

const ProductCardImg = styled.img`
  max-width: 100%;
`

const ProductCard = ({ name, price, type, thc }) => (
  <Card>
    <CardContent>
      <ProductCardImg src={weed} />
      <p>
        <b>{name}</b>
      </p>
      <p>${price}</p>
      <p>{type}</p>
      <p>THC: {thc ? thc + "%" : "--"}</p>
    </CardContent>
  </Card>
)

export default ProductCard
