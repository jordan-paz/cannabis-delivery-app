import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const ShopHeaderWrapper = styled.header`
margin-top: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  left: 0;
  right: 0;
  height: 80px;
  small {
    margin: 3px;
  }
  }
`

const ShopHeaderContent = styled.div`
  margin-left: 20px;
  p {
    display: inline;
  }
`

const ShopHeader = ({ category }) => (
  <div>
    <ShopHeaderWrapper>
      <ShopHeaderContent>
        <Link to="/">
          <small>Back</small>
        </Link>
      </ShopHeaderContent>
    </ShopHeaderWrapper>
  </div>
)

export default ShopHeader
