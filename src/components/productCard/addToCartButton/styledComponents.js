import styled from "styled-components"

export const StyledAddToCartButton = styled.button`
  border: none;
  margin: 0 10px 10px 10px;
  align-content: center;
  display: flex;
  background-color: #eaedec;
  color: #000;
  border-radius: 5px;
  padding: 15px 25px;
  width: 90%;
  :hover {
    cursor: pointer;
  }
  :focus {
    outline: 0;
  }
  span {
    font-size: 18px;
    font-weight: bold;
    margin: 0 5px 0 auto;
  }
  img {
    max-width: 23px;
    margin: 0 auto 0 5px;
  }
`
