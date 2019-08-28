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
  const flower = edges.filter(
    edge => edge.node.category.name === "Pre-Packaged"
  )

  const cartridges = edges.filter(
    edge => edge.node.category.name === "Cartridge"
  )

  const edibles = edges.filter(edge => edge.node.category.name === "Edible")

  const concentrates = edges.filter(
    edge =>
      edge.node.category.name === "Wax" ||
      edge.node.category.name === "Live Resin"
  )

  const topicals = edges.filter(edge => edge.node.category.name === "Topical")

  const gear = edges.filter(edge => edge.node.category.name === "Gear")

  return (
    <Layout>
      <SEO title="Home" />
      <MainWrapper>
        <RegisterButton />
        <CategoryScroller title={"Flower"} products={flower} />
        <CategoryScroller title={"Vape-Cartridges"} products={cartridges} />
        <CategoryScroller title={"Edibles"} products={edibles} />
        <CategoryScroller title={"Concentrates"} products={concentrates} />
        <CategoryScroller title={"Tinctures & Topicals"} products={topicals} />
        <CategoryScroller title={"Gear"} products={gear} />
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
