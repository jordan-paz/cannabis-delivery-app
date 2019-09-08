import React, { useContext } from "react"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import CartItem from "./cartItem"

import OrderContext from "../../context/orderContext"

export default () => {
  const { products } = useContext(OrderContext)
  console.log(products)
  return (
    <List>
      {products.map(product => (
        <div key={product.id}>
          <CartItem product={product} />
          <Divider />
        </div>
      ))}
    </List>
  )
}
