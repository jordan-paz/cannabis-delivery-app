import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import FeaturedProductsScroller from "../components/featuredProducts"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <FeaturedProductsScroller />
  </Layout>
)

export default IndexPage
