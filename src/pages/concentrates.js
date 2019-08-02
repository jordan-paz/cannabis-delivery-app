import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ShopHeader from "../components/shopHeader"
import SEO from "../components/seo"
import Catalog from "../components/catalog"

const ConcentratesPage = ({
  data: {
    allProduct: { edges },
  },
}) => {
  return (
    <Layout>
      <SEO title="Concentrates" />
      <ShopHeader category="Concentrates" />
      <Catalog edges={edges} />
    </Layout>
  )
}

export const query = graphql`
  query LoadConcentrates {
    allProduct(filter: { type: { eq: "Concentrates" } }) {
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

export default ConcentratesPage
