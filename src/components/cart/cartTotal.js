import React from "react"
import ListItem from "@material-ui/core/ListItem"
import styled from "styled-components"

const TotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
`

export default ({ subtotal }) => {
  return (
    <TotalWrapper>
      <ListItem>Subtotal: ${subtotal}</ListItem>
      <ListItem>Tax: ${subtotal * 0.0875}</ListItem>
      <ListItem>Total: ${subtotal + subtotal * 0.0875}</ListItem>
    </TotalWrapper>
  )
}
