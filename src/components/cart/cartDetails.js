import React, { useContext } from "react"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import CartItem from "./cartItem"
import CartTotal from "./cartTotal"
import OrderContext from "../../context/orderContext"

export default () => {
  const { products, removeItem, subtotal } = useContext(OrderContext)
  return (
    <List>
      {products.map(product => (
        <div key={product.id}>
          <CartItem product={product} removeItem={removeItem} />
          <Divider />
        </div>
      ))}
      <CartTotal subtotal={subtotal} />
    </List>
  )
}
