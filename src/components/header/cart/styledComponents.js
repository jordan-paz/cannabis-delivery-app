import styled from "styled-components"
import Button from "@material-ui/core/Button"

export const StyledCheckoutButton = styled(Button)`
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
export const StyledCartButton = styled(Button)`
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
