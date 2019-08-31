import styled from "styled-components"

export const HeaderWrapper = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  height: 45px;
  top: 0;
  background-color: var(--bg-color);
`

export const HeaderContent = styled.div`
  margin: 0 auto;
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`

export const HeaderLogo = styled.h2`
  color: var(--primary-color);
`
