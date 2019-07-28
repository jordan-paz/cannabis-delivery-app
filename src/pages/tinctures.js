import React from "react"
import Layout from "../components/layout"
import ShopHeader from "../components/shopHeader"
import SEO from "../components/seo"
import Catalog from "../components/catalog"

const TincturesPage = () => (
  <Layout>
    <SEO title="Tinctures" />
    <ShopHeader category="Tinctures" />
    <Catalog />
  </Layout>
)

export default TincturesPage
