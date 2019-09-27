import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Catalog from "../components/catalog"
import useFlower from "../hooks/useFlower"

export default () => {
  return (
    <Layout>
      <SEO title="Flower" />
      <Catalog products={useFlower()} />
    </Layout>
  )
}
