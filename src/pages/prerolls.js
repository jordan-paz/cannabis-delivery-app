import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Catalog from "../components/catalog"
import usePrerolls from "../hooks/usePrerolls"

export default () => {
  const products = usePrerolls()
  return (
    <Layout>
      <SEO title="Prerolls" />
      <Catalog products={products} />
    </Layout>
  )
}
