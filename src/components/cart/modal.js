import React from "react"
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
import { StyledCheckoutButton } from "./styledComponents"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Fade ref={ref} {...props} />
})

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

export default ({ open, handleClose }) => {
  const classes = useStyles()
  return (
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
  )
}