import React from "react"
import Layout from "../components/layout"
import ShopHeader from "../components/shopHeader"
import SEO from "../components/seo"
import Catalog from "../components/catalog"

const TopicalsPage = () => (
  <Layout>
    <SEO title="Home" />
    <ShopHeader category="Topicals" />
    <Catalog />
  </Layout>
)

export default TopicalsPage
