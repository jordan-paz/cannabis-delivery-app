import React, { useContext } from "react"
import OrderContext from "../../../context/orderContext"
import { StyledAddToCartButton } from "./styledComponents"
import addToCartIcon from "../../../images/add-to-cart.svg"

export default ({ product }) => {
  const { addToOrder } = useContext(OrderContext)
  return (
    <StyledAddToCartButton onClick={() => addToOrder(product, 1)}>
      <span>${product.variants[0].price}</span>
      <img src={addToCartIcon} alt="Add to cart" />
    </StyledAddToCartButton>
  )
}
