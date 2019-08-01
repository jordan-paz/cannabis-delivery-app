import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import CategoryScroller from "../components/categoryScroller"
import MainWrapper from "../components/mainWrapper"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <MainWrapper>
      <CategoryScroller title="Flower" />
      <CategoryScroller title="Vape Cartridges" />
      <CategoryScroller title="Prerolls" />
      <CategoryScroller title="Concentrates" />
      <CategoryScroller title="Edibles" />
      <CategoryScroller title="Gear" />
    </MainWrapper>
  </Layout>
)

export default IndexPage
