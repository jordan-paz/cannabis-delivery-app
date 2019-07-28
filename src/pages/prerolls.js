import React from "react"
import Layout from "../components/layout"
import ShopHeader from "../components/shopHeader"
import SEO from "../components/seo"
import Catalog from "../components/catalog"

const PrerollsPage = () => (
  <Layout>
    <SEO title="Prerolls" />
    <ShopHeader category="Prerolls" />
    <Catalog />
  </Layout>
)

export default PrerollsPage
