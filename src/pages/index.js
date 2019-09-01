import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import RegisterButton from "../components/registerButton"
import CategoryScroller from "../components/categoryScroller"
import MainWrapper from "../components/mainWrapper"
import SEO from "../components/seo"

import useFlower from "../hooks/useFlower"
import useConcentrates from "../hooks/useConcentrates"
import useEdibles from "../hooks/useEdibles"
import useGear from "../hooks/useGear"
import usePrerolls from "../hooks/usePrerolls"
import useTinctures from "../hooks/useTinctures"
import useVaporizers from "../hooks/useVaporizers"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <MainWrapper>
        <RegisterButton />
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

export const query = graphql`
  query LoadProducts {
    allProduct {
      edges {
        node {
          id
          productId
          name
          brand {
            name
          }
          image {
            url
          }
          strain {
            indicaSativaRatio
            name
          }
          variants {
            id
            flavor
            price
          }
          type
          category {
            id
            name
          }
          subCategory {
            id
            name
          }
        }
      }
    }
  }
`

export default IndexPage
