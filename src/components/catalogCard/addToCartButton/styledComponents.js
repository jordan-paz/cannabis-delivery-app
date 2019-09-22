import styled from "styled-components"

export const StyledAddToCartButton = styled.button`
  margin: auto auto 0 auto;
  border: none;
  align-content: center;
  display: flex;
  background-color: #eaedec;
  color: #000;
  border-radius: 2px;
  padding: 10px 25px;
  width: 100%;
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
    max-height: 100%;
    max-width: 23px;
    margin: 0 auto 0 5px;
  }
`
