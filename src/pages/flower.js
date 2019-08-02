import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ShopHeader from "../components/shopHeader"
import SEO from "../components/seo"
import Catalog from "../components/catalog"

const FlowerPage = ({
  data: {
    allProduct: { edges },
  },
}) => {
  return (
    <Layout>
      <SEO title="Flower" />
      <ShopHeader category="Flower" />
      <Catalog edges={edges} />
    </Layout>
  )
}

export const query = graphql`
  query LoadFlower {
    allProduct(filter: { type: { eq: "Concentrate" } }) {
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
        }
      }
    }
  }
`

export default FlowerPage
