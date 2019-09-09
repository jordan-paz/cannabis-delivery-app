import React, { useContext } from "react"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import CartItem from "./cartItem"
import uniqid from "uniqid"

import OrderContext from "../../context/orderContext"

export default () => {
  const { products, removeItem } = useContext(OrderContext)
  return (
    <List>
      {products.map(product => (
        <div key={uniqid()}>
          <CartItem product={product} removeItem={removeItem} />
          <Divider />
        </div>
      ))}
    </List>
  )
}
