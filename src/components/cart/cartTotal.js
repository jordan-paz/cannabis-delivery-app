import React from "react"
import ListItem from "@material-ui/core/ListItem"

import { TotalWrapper } from "./styledComponents"

export default ({ subtotal }) => {
  return (
    <TotalWrapper>
      <ListItem>Subtotal: ${subtotal}</ListItem>
      <ListItem>Tax: ${subtotal * 0.0875}</ListItem>
      <ListItem>Total: ${subtotal + subtotal * 0.0875}</ListItem>
    </TotalWrapper>
  )
}
