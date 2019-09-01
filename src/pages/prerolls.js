import React from "react"
import Layout from "../components/layout"
import BackButton from "../components/backButton"
import SEO from "../components/seo"
import Catalog from "../components/catalog"
import usePrerolls from "../hooks/usePrerolls"

export default () => {
  const products = usePrerolls()
  return (
    <Layout>
      <SEO title="Prerolls" />
      <BackButton />
      <Catalog products={products} />
    </Layout>
  )
}
