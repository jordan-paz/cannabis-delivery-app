import styled from "styled-components"

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
`

export const MainContent = styled.main`
  min-height: 400px;
  display: flex;
  width: 90%;
  flex-direction: column;
  align-items: center;
  p {
    line-height: 24px;
    font-size: 17px;
  }
  button {
    align-self: center;
  }
`

export const ProductImg = styled.img`
  margin: 0 auto;
  width: 50%;
  max-width: 300px;
`

export const UnitWeightBadge = styled.div`
  width: 90px;
  height: 40px;
  display: flex;
  align-self: flex-start;
  justify-content: center;
  align-items: center;
  border: 1px solid #d8dee3;
  border-radius: 2px;
  margin-bottom: 20px;
  background-color: #fbfcfc;
`

export const StyledAddToCartButton = styled.button`
  border: none;
  display: flex;
  flex-direction: row;
  margin: 20px auto;
  font-size: 15px;
  background-color: var(--secondary-color);
  color: #fff;
  border-radius: 5px;
  padding: 10px 30px;
  width: 100%;
  height: 60px;
  :hover {
    cursor: pointer;
  }
  :focus {
    outline: 0;
  }
  span {
    font-size: 18px;
    font-weight: bold;
  }
`

export const AddToCartButtonCart = styled.img`
  width: 25px;
`
export const AddToCartButtonText = styled.span`
  margin: 0 auto;
`
export const AddToCartButtonPrice = styled.span``
