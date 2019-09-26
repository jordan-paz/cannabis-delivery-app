import React from "react"
import Layout from "../components/layout"
import BackButton from "../components/backButton"
import SEO from "../components/seo"
import Catalog from "../components/catalog"
import useGear from "../hooks/useGear"

export default () => {
  const products = useGear()
  return (
    <Layout>
      <SEO title="Gear" />
      <Catalog products={products} />
    </Layout>
  )
}
