import styled from "styled-components"

export const HeaderWrapper = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  height: 55px;
  top: 0;
  background-color: var(--bg-color);
`

export const HeaderContent = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100%;
`

export const HeaderLogo = styled.h2`
  font-size: 30px;
  margin: 0 auto;
  align-self: center;
  color: var(--primary-color);
`

export const LoginWrapper = styled.div`
  margin: 0 10px 0 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
