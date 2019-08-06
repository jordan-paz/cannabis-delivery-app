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
  query loadConcentrates {
    allProduct(
      filter: {
        subCategory: { name: { in: ["Sauce", "Crumble", "Applicator"] } }
      }
    ) {
      edges {
        node {
          type
          category {
            name
          }
          subCategory {
            name
          }
          description
          featured
          id
          image {
            url
          }
          name
          variants {
            price
            productId
            unitWeight
            unit
            flavor
            description
          }
        }
      }
    }
  }
`

export default ConcentratesPage
