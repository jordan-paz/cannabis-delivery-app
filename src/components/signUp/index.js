import React, { useState } from "react"
import OpenModalButton from "./openModalButton"
import Modal from "./modal"

export default () => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  return (
    <>
      <OpenModalButton handleClickOpen={handleClickOpen} />
      <Modal handleClose={handleClose} open={open} />
    </>
  )
}
