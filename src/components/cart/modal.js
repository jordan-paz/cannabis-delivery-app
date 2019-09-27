import React from "react"
import CloseIcon from "../../images/close-x-black.svg"
import Fade from "@material-ui/core/Fade"
import { useTheme } from "@material-ui/core/styles"
import {
  StyledCheckoutButton,
  StyledTitle,
  StyledDialog,
  StyledCloseButton,
} from "./styledComponents"
import CartDetails from "./cartDetails"
import useMediaQuery from "@material-ui/core/useMediaQuery"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Fade ref={ref} {...props} />
})

export default ({ open, handleClose, removeItem, subtotal, products }) => {
  const theme = useTheme()
  return (
    <StyledDialog
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      fullScreen={useMediaQuery(theme.breakpoints.down("sm"))}
    >
      <StyledTitle>Your Cart</StyledTitle>
      <StyledCloseButton
        onClick={handleClose}
        color="inherit"
        aria-label="close"
      >
        <img src={CloseIcon} alt="Close" />
      </StyledCloseButton>
      <CartDetails
        removeItem={removeItem}
        subtotal={subtotal}
        products={products}
      />
      <StyledCheckoutButton>Checkout</StyledCheckoutButton>
    </StyledDialog>
  )
}
