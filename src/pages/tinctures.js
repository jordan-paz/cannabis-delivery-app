import React from "react"
import Layout from "../components/layout"
import BackButton from "../components/backButton"
import SEO from "../components/seo"
import Catalog from "../components/catalog"
import useTinctures from "../hooks/useTinctures"

export default () => {
  const products = useTinctures()
  return (
    <Layout>
      <SEO title="Tinctures" />
      <Catalog products={products} />
    </Layout>
  )
}
