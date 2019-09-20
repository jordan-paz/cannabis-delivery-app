import React from "react"
import Layout from "../components/layout"
import CategoryScroller from "../components/categoryScroller"
import SEO from "../components/seo"
import styled from "styled-components"

// GraphQL query hooks //
import useFlower from "../hooks/useFlower"
import useConcentrates from "../hooks/useConcentrates"
import useEdibles from "../hooks/useEdibles"
import useGear from "../hooks/useGear"
import usePrerolls from "../hooks/usePrerolls"
import useTinctures from "../hooks/useTinctures"
import useVaporizers from "../hooks/useVaporizers"

const MainWrapper = styled.main`
  margin-top: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: flex-end;
`

export default () => {
  return (
    <Layout>
      <SEO title="Home" />
      <MainWrapper>
        <CategoryScroller
          title={"Flower"}
          products={useFlower()}
          pageUrl={"flower"}
        />
        <CategoryScroller
          title={"Prerolls"}
          products={usePrerolls()}
          pageUrl={"prerolls"}
        />
        <CategoryScroller
          title={"Vaporizers"}
          products={useVaporizers()}
          pageUrl={"vaporizers"}
        />
        <CategoryScroller
          title={"Edibles"}
          products={useEdibles()}
          pageUrl={"edibles"}
        />
        <CategoryScroller
          title={"Concentrates"}
          products={useConcentrates()}
          pageUrl={"concentrates"}
        />
        <CategoryScroller
          title={"Tinctures"}
          products={useTinctures()}
          pageUrl={"tinctures"}
        />
        <CategoryScroller
          title={"Gear"}
          products={useGear()}
          pageUrl={"gear"}
        />
      </MainWrapper>
    </Layout>
  )
}
