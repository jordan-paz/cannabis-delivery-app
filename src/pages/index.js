import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import CategoryScroller from "../components/categoryScroller"
import MainWrapper from "../components/mainWrapper"
import SEO from "../components/seo"

const IndexPage = ({
  data: {
    allProduct: { edges },
  },
}) => {
  const concentrates = edges.filter(edge => edge.node.type === "Concentrate")
  const flowers = edges.filter(edge => edge.node.type === "Buds")

  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <MainWrapper>
        <CategoryScroller title={"Flower"} products={flowers} />
        <CategoryScroller title={"Vapes"} products={flowers} />
        <CategoryScroller title={"Edibles"} products={flowers} />
        <CategoryScroller title={"Concentrates"} products={flowers} />
        <CategoryScroller title={"Topicals"} products={flowers} />
        <CategoryScroller title={"Tinctures"} products={flowers} />
        <CategoryScroller title={"Gear"} products={flowers} />
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
