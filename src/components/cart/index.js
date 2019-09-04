import cartIcon from "../../images/shopping-cart.svg"
import React, { useContext } from "react"
import Dialog from "@material-ui/core/Dialog"
import ListItem from "@material-ui/core/ListItem"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import CloseIcon from "../../images/close-x-white.svg"
import Fade from "@material-ui/core/Fade"
import { makeStyles } from "@material-ui/core/styles"
import { StyledCheckoutButton, StyledCartButton } from "./styledComponents"
import { OrderContext } from "../../context/orderContext"

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative",
    backgroundColor: "var(--secondary-color)",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}))

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Fade ref={ref} {...props} />
})

export default function CartModal({ userId }) {
  const { orderDetails } = useContext(OrderContext)
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

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
        <span>{orderDetails.length}</span>
      </StyledCartButton>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Your Cart
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <img src={CloseIcon} alt="Close" />
            </IconButton>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem>Item #1</ListItem>
          <Divider />
          <ListItem>Item #2</ListItem>
        </List>
        <StyledCheckoutButton>Checkout</StyledCheckoutButton>
      </Dialog>
    </div>
  )
}
