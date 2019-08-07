import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BackButton from "../components/backButton"
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
      <BackButton />
      <Catalog edges={edges} />
    </Layout>
  )
}

export const query = graphql`
  query LoadTopicals {
    allProduct(filter: { category: { name: { eq: "Topical" } } }) {
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

export default TopicalsPage
