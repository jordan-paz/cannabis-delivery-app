import cartIcon from "../../images/shopping-cart.svg"
import React, { useContext, useState } from "react"
import { StyledCartButton } from "./styledComponents"
import Modal from "./modal"
import OrderContext from "../../context/orderContext"

export default () => {
  const { products } = useContext(OrderContext)
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

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
