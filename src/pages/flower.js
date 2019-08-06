import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ShopHeader from "../components/shopHeader"
import SEO from "../components/seo"
import Catalog from "../components/catalog"
import RegisterButton from "../components/registerButton"

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
      <RegisterButton />
    </Layout>
  )
}

export const query = graphql`
  query LoadFlower {
    allProduct(filter: { category: { name: { eq: "Pre-Packaged" } } }) {
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

export default FlowerPage
