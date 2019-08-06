import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BackButton from "../components/backButton"
import SEO from "../components/seo"
import Catalog from "../components/catalog"

const TincturesPage = ({
  data: {
    allProduct: { edges },
  },
}) => {
  return (
    <Layout>
      <SEO title="Tinctures" />
      <BackButton />
      <Catalog edges={edges} />
    </Layout>
  )
}

export const query = graphql`
  query LoadTinctures {
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

export default TincturesPage
