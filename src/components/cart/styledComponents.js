import styled from "styled-components"
import Button from "@material-ui/core/Button"
import DialogTitle from "@material-ui/core/DialogTitle"

import Dialog from "@material-ui/core/Dialog"

export const StyledTitle = styled(DialogTitle)`
  text-align: center;
`

export const StyledCloseButton = styled.button`
  border: none;
  background-color: #fff;
  position: absolute;
  right: 10px;
  top: 10px;
`

export const StyledCheckoutButton = styled(Button)`
  border: none;
  display: flex;
  margin: 20px auto;
  font-size: 15px;
  background-color: var(--secondary-color);
  color: #fff;
  border-radius: 5px;
  padding: 10px 30px;
  width: 90%;
  height: 50px;
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
export const StyledCartButton = styled(Button)`
  background-color: #006caa;
  display: flex;
  position: fixed;
  right: 15px;
  bottom: 15px;
  justify-items: space-around;
  height: 80px;
  width: 80px;
  border-radius: 80px;
  color: #fff;
  padding: 0 15px;
  img {
    width: 32px;
  }
  span {
    font-size: 32px;
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

export const StyledDialog = styled(Dialog)`
  .MuiPaper-root {
    right: 0;
    min-width: 80vw;
  }
  .MuiDialog-paper {
    margin: 0;
    height: 100%;
  }
  header {
    max-height: 65px;
  }
`
