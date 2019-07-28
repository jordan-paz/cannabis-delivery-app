import React from "react"
import Layout from "../components/layout"
import ShopHeader from "../components/shopHeader"
import SEO from "../components/seo"
import Catalog from "../components/catalog"

const FlowerPage = () => (
  <Layout>
    <SEO title="Flower" />
    <ShopHeader category="Flower" />
    <Catalog />
  </Layout>
)

export default FlowerPage
