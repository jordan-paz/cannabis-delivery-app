import React from "react"
import Layout from "../components/layout"
import BackButton from "../components/backButton"
import SEO from "../components/seo"
import Catalog from "../components/catalog"
import useEdibles from "../hooks/useEdibles"

export default () => {
  const products = useEdibles()
  return (
    <Layout>
      <SEO title="Edibles" />
      <Catalog products={products} />
    </Layout>
  )
}
