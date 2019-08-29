import cartIcon from "../images/shopping-cart.svg"
import React from "react"
import styled from "styled-components"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import ListItem from "@material-ui/core/ListItem"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import CloseIcon from "../images/close-x-white.svg"
import Fade from "@material-ui/core/Fade"

import { OrderContext } from "../context/orderContext"

const StyledCheckoutButton = styled(Button)`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  border: none;
  display: flex;
  flex-direction: row;
  margin: 20px auto;
  font-size: 15px;
  background-color: var(--secondary-color);
  color: #fff;
  border-radius: 40px;
  padding: 10px 30px;
  width: 90vw;
  height: 60px;
  :hover {
    cursor: pointer;
    background-color: var(--secondary-color);
  }
  :focus {
    outline: 0;
  }
  span {
    font-size: 18px;
    font-weight: bold;
  }
`

const StyledCartButton = styled(Button)`
  background-color: var(--primary-color);
  display: flex;
  right: 0;
  justify-items: space-around;
  height: 48px;
  width: 100px;
  border-radius: 0;
  color: #fff;
  span {
    font-size: 24px;
  }
  :hover {
    background-color: var(--primary-color);
  }
  .MuiButton-label {
    display: flex;
    justify-content: space-around;
    align-content: center;
  }
`

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
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  function handleClickOpen() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  return (
    <OrderContext.Consumer>
      {({ orderDetails }) => {
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
                <ListItem></ListItem>
                <Divider />
                <ListItem></ListItem>
              </List>
              <StyledCheckoutButton>Checkout</StyledCheckoutButton>
            </Dialog>
          </div>
        )
      }}
    </OrderContext.Consumer>
  )
}
