import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const ProductHeaderWrapper = styled.header`
  
margin-top: 110px;
  padding-top: 30px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  left: 0;
  right: 0;
  height: 60px;
  small {
    margin: 3px;
  }
  }
`

const ProductHeaderContent = styled.div`
  margin-left: 20px;
  p {
    display: inline;
  }
`
const ProductHeader = ({ category, name }) => (
  <div>
    <ProductHeaderWrapper>
      <ProductHeaderContent>
        <nav>
          <Link to="/">
            <small>Home</small>
          </Link>
          /
          <Link to={`${category.toLowerCase()}`}>
            <small>{category}</small>
          </Link>
          /<small>{name}</small>
        </nav>
      </ProductHeaderContent>
    </ProductHeaderWrapper>
  </div>
)

export default ProductHeader
