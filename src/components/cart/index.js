import cartIcon from "../../images/shopping-cart.svg"
import React, { useContext, useState, useEffect } from "react"
import { StyledCartButton } from "./styledComponents"
import Modal from "./modal"
import OrderContext from "../../context/orderContext"

export default () => {
  const { products } = useContext(OrderContext)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    console.log(products)
  }, [products])

  function handleClickOpen() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  return (
    <div>
      <StyledCartButton onClick={handleClickOpen}>
        <img src={cartIcon} alt="cart" />
        <span>{products.length}</span>
      </StyledCartButton>
      <Modal fullScreen open={open} handleClose={handleClose} />
    </div>
  )
}