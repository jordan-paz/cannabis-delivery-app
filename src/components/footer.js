import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.footer`
  background-color: #eee;
  margin-top: 50px;
  display: flex;
  height: 300px;
  justify-content: center;
  align-items: center;
`

const FooterContent = styled.div`
  display: flex;
  width: 60%;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <p>Logo</p>
        <ul>
          <li>Flower</li>
          <li>Edibles</li>
          <li>Concentrates</li>
          <li>Vapes</li>
          <li>Merch</li>
        </ul>
        <p>About</p>
        <p>Contact Us</p>
        <small>&copy; Copyright 2019, Jordan Paz</small>
      </FooterContent>
    </FooterWrapper>
  )
}

export default Footer
