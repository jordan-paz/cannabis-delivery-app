import styled from "styled-components"

export const CardContainer = styled.div`
  display: flex;
  height: 300px;
  width: 47%;
  margin: 5px auto;
  max-width: 280px;
  @media only screen and (min-width: 500px) {
    width: 32%;
    max-width: 200px;
  }
  @media only screen and (min-width: 850px) {
    width: 24%;
    max-width: 200px;
  }
  @media only screen and (min-width: 1200px) {
    width: 24%;
    max-width: 240px;
    height: 350px;
  }
`

export const CatalogWrapper = styled.main`
  padding: 0 10px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  max-width: 650px;
  align-items: flex-start;
  @media only screen and (min-width: 850px) {
    max-width: 800px;
  }
  @media only screen and (min-width: 1200px) {
    max-width: 1000px;
  }
`
