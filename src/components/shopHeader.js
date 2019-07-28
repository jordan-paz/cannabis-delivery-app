import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const ShopHeaderWrapper = styled.header`
margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background-color: #FAFAFF;
  left: 0;
  right: 0;
  height: 180px;
  }
`

const ShopHeaderContent = styled.div`
  margin-left: 20px;
  p {
    display: inline;
  }
`

const ShopHeaderTitle = styled.h1`
  margin: 0;
  margin-top: 20px;
`

const ShopHeader = ({ category }) => (
  <div>
    <ShopHeaderWrapper>
      <ShopHeaderContent>
        <nav>
          <Link to="/">
            <small>Home</small>
          </Link>
          /<small>{category}</small>
        </nav>
        <ShopHeaderTitle>{category}</ShopHeaderTitle>
      </ShopHeaderContent>
    </ShopHeaderWrapper>
  </div>
)

export default ShopHeader
