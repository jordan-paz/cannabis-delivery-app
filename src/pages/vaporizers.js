import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Catalog from "../components/catalog"
import useVaporizers from "../hooks/useVaporizers"

export default () => {
  const products = useVaporizers()
  return (
    <Layout>
      <SEO title="Vaporizers" />
      <Catalog products={products} />
    </Layout>
  )
}
