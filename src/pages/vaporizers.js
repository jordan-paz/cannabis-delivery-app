import React from "react"
import Layout from "../components/layout"
import BackButton from "../components/backButton"
import SEO from "../components/seo"
import Catalog from "../components/catalog"
import useVaporizers from "../hooks/useVaporizers"

export default () => {
  const products = useVaporizers()
  return (
    <Layout>
      <SEO title="Vaporizers" />
      <BackButton />
      <Catalog products={products} />
    </Layout>
  )
}
