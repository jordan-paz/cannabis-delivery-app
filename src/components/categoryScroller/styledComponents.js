import styled from "styled-components"

export const CategoryScrollerSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 97%;
  padding-bottom: 2rem;
  border-bottom: solid 2px #ddd;
  color: var(--black);
`

export const ScrollerHeader = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
`

export const ScrollerHeaderTitle = styled.h1`
  font-size: 30px;
  justify-self: flex-start;
  padding-left: 2px;
  border-bottom: 4px solid var(--primary-color);
  border-length: 20px;
  line-height: 40px;
`

export const ScrollerHeaderLink = styled.span`
  display: flex;
  align-items: center;
  img {
    margin-left: 5px;
  }
`

export const ScrollerHeaderLinkWrapper = styled.span`
  margin-left: auto;
  padding-right: 15px;
  :hover {
    cursor: pointer;
  }
`

export const ScrollerWrapper = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  width: 100%;
  padding: 2px;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(10, calc(42%));
`
