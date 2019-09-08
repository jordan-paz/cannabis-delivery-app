import React from "react"
import ListItem from "@material-ui/core/ListItem"
import styled from "styled-components"

const CartItemImg = styled.img`
  max-width: 80px;
`

export default ({ product }) => {
  return (
    <ListItem>
      <CartItemImg src={product.image.url} />
      {product.name}
    </ListItem>
  )
}
