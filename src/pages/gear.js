import React from "react"
import Layout from "../components/layout"
import ShopHeader from "../components/shopHeader"
import SEO from "../components/seo"
import Catalog from "../components/catalog"

const GearPage = () => (
  <Layout>
    <SEO title="Gear" />
    <ShopHeader category="Gear" />
    <Catalog />
  </Layout>
)

export default GearPage
