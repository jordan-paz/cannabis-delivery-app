import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BackButton from "../components/backButton"
import SEO from "../components/seo"
import Catalog from "../components/catalog"

const EdiblesPage = ({
  data: {
    allProduct: { edges },
  },
}) => {
  return (
    <Layout>
      <SEO title="Edibles" />
      <BackButton />
      <Catalog edges={edges} />
    </Layout>
  )
}

export const query = graphql`
  query LoadEdibles {
    allProduct(filter: { category: { name: { eq: "Edible" } } }) {
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

export default EdiblesPage
