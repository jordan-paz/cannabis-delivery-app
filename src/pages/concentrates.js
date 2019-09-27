import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Catalog from "../components/catalog"
import useConcentrates from "../hooks/useConcentrates"

export default () => {
  const products = useConcentrates()
  return (
    <Layout>
      <SEO title="Concentrates" />
      <Catalog products={products} />
    </Layout>
  )
}
