import React from "react"
import Layout from "../components/layout"
import ShopHeader from "../components/shopHeader"
import SEO from "../components/seo"
import Catalog from "../components/catalog"

const EdiblesPage = () => (
  <Layout>
    <SEO title="Edibles" />
    <ShopHeader category="Edibles" />
    <Catalog />
  </Layout>
)

export default EdiblesPage
