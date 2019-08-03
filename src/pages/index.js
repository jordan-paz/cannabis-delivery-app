import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import RegisterButton from "../components/registerButton"
import CategoryScroller from "../components/categoryScroller"
import MainWrapper from "../components/mainWrapper"
import SEO from "../components/seo"

const IndexPage = ({
  data: {
    allProduct: { edges },
  },
}) => {
  const concentrates = edges.filter(edge => edge.node.type === "Concentrate")
  const buds = edges.filter(edge => edge.node.type === "Buds")

  return (
    <Layout>
      <SEO title="Home" />
      <MainWrapper>
        <RegisterButton />
        <CategoryScroller title={"Buds"} products={buds} />
        <CategoryScroller title={"Vaporizers"} products={buds} />
        <CategoryScroller title={"Edibles"} products={buds} />
        <CategoryScroller title={"Concentrates"} products={buds} />
        <CategoryScroller title={"Topicals"} products={buds} />
        <CategoryScroller title={"Tinctures"} products={buds} />
        <CategoryScroller title={"Gear"} products={buds} />
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
            flavor
            price
          }
          type
        }
      }
    }
  }
`

export default IndexPage
