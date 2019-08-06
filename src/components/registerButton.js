import React from "react"
import styled from "styled-components"
import ResgisterIcon from "../images/register.svg"

const StyledRegisterButton = styled.button`
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 10px;
  border: none;
  display: flex;
  align-items: center;
  justify-items: center;
  font-size: 17px;
  font-weight: bold;
  background-color: var(--secondary-color);
  color: #fff;
  border-radius: 5px;
  padding: 20px 20px;
  width: 200px;
  :hover {
    cursor: pointer;
  }
  :focus {
    outline: 0;
  }
  span {
    font-size: 17px;
    font-weight: bold;
    margin: 0 auto;
  }
  img {
    margin: 0 auto;
    max-width: 100px;
  }
`

const RegisterButton = () => {
  return (
    <StyledRegisterButton>
      <img src={ResgisterIcon} alt="Register" />
      <span>JOIN THE CLUB</span>
    </StyledRegisterButton>
  )
}

export default RegisterButton
