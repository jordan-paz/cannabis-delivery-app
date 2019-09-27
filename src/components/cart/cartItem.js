import React from "react"
import ListItem from "@material-ui/core/ListItem"

import { ItemImg, ItemDetailsWrapper, RemoveButton } from "./styledComponents"

export default ({ product, removeItem }) => {
  return (
    <ListItem>
      <ItemImg src={product.image.url} />
      <ItemDetailsWrapper>
        <div>{product.name}</div>
        <span>${product.variants[0].price}</span>
      </ItemDetailsWrapper>

      <RemoveButton onClick={() => removeItem(product.id)}>X</RemoveButton>
    </ListItem>
  )
}
