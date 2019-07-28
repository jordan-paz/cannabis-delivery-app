import React from "react"
import Layout from "../components/layout"
import ShopHeader from "../components/shopHeader"
import SEO from "../components/seo"
import Catalog from "../components/catalog"

const VaporizersPage = () => (
  <Layout>
    <SEO title="Vaporizers" />
    <ShopHeader category="Vaporizers" />
    <Catalog />
  </Layout>
)

export default VaporizersPage
