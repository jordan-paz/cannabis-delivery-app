import React, { useContext } from "react"
import { OrderContext } from "../../../context/orderContext"
import { StyledAddToCartButton } from "./styledComponents"
import addToCartIcon from "../../../images/add-to-cart.svg"

const AddToCartButton = ({ price, productId }) => {
  const { addToOrder } = useContext(OrderContext)
  return (
    <StyledAddToCartButton onClick={() => addToOrder(productId, 1)}>
      <img src={addToCartIcon} alt="Add to cart" />
      <span>${price}</span>
    </StyledAddToCartButton>
  )
}

export default AddToCartButton
