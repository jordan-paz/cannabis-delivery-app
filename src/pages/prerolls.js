import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ShopHeader from "../components/shopHeader"
import SEO from "../components/seo"
import Catalog from "../components/catalog"

const PrerollsPage = ({
  data: {
    allProduct: { edges },
  },
}) => {
  return (
    <Layout>
      <SEO title="Prerolls" />
      <ShopHeader category="Prerolls" />
      <Catalog edges={edges} />
    </Layout>
  )
}

export const query = graphql`
  query PreRolls {
    allProduct(filter: { category: { name: { eq: "Pre-Roll" } } }) {
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

export default PrerollsPage
