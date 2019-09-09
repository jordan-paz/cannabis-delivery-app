import React from "react"
import ListItem from "@material-ui/core/ListItem"
import styled from "styled-components"

const ItemImg = styled.img`
  max-width: 70px;
  margin-right: 10px;
`

const ItemDetailsWrapper = styled.div`
  height: 70px;
  width: 75%;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const RemoveButton = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 5px;
`

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
