import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ShopHeader from "../components/shopHeader"
import SEO from "../components/seo"
import Catalog from "../components/catalog"

const TopicalsPage = ({
  data: {
    allProduct: { edges },
  },
}) => {
  return (
    <Layout>
      <SEO title="Topicals" />
      <ShopHeader category="Topicals" />
      <Catalog edges={edges} />
    </Layout>
  )
}

export const query = graphql`
  query LoadTopicals {
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

export default TopicalsPage
