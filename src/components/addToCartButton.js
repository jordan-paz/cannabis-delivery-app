import React, { useContext } from "react"
import styled from "styled-components"
import { OrderContext } from "../context/orderContext"
import addToCartIcon from "../images/add-to-cart.svg"

const StyledAddToCartButton = styled.button`
  border: 2px solid var(--grey);
  margin: 0 10px 10px 10px;
  align-content: center;
  display: flex;
  background-color: #fff;
  color: var(--primary-color);
  border-radius: 5px;
  padding: 15px 25px;
  width: 90%;
  :hover {
    cursor: pointer;
  }
  :focus {
    outline: 0;
  }
  span {
    font-size: 18px;
    font-weight: bold;
    margin: 0 auto;
  }
  img {
    max-width: 23px;
    margin: 0 auto;
  }
`

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
