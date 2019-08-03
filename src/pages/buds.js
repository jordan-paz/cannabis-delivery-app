import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ShopHeader from "../components/shopHeader"
import SEO from "../components/seo"
import Catalog from "../components/catalog"
import RegisterButton from "../components/registerButton"

const BudsPage = ({
  data: {
    allProduct: { edges },
  },
}) => {
  return (
    <Layout>
      <SEO title="Buds" />
      <ShopHeader category="Buds" />
      <Catalog edges={edges} />
      <RegisterButton />
    </Layout>
  )
}

export const query = graphql`
  query LoadBuds {
    allProduct(filter: { type: { eq: "Buds" } }) {
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

export default BudsPage
