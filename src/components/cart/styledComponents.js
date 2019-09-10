import styled from "styled-components"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"

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
  background-color: var(--primary-color);
  display: flex;
  right: 0;
  justify-items: space-around;
  height: 48px;
  width: 80px;
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

export const StyledDialog = styled(Dialog)`
  .MuiPaper-root {
    right: 0;
    width: 90vw;
  }
  .MuiDialog-paper {
    margin: 0;
    height: 100%;
  }
  header {
    max-height: 65px;
  }
`
