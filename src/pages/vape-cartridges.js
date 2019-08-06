import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BackButton from "../components/backButton"
import SEO from "../components/seo"
import Catalog from "../components/catalog"

const VapeCartridgesPage = ({
  data: {
    allProduct: { edges },
  },
}) => {
  return (
    <Layout>
      <SEO title="VapeCartridges" />
      <BackButton />
      <Catalog edges={edges} />
    </Layout>
  )
}

export const query = graphql`
  query LoadCartridges {
    allProduct(filter: { category: { name: { eq: "Cartridge" } } }) {
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

export default VapeCartridgesPage
