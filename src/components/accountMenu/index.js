import React from "react"
import Menu from "./menu"
import Button from "@material-ui/core/Button"

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const firstName = localStorage.name.split(" ")[0]

  function handleClick(event) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Hi {firstName} &#9660;
      </Button>
      <Menu anchorEl={anchorEl} handleClose={handleClose} />
    </div>
  )
}
