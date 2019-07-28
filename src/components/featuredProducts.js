import React, { useEffect, useState } from "react"
import styled from "styled-components"
import ProductCard from "./productCard"
import axios from "axios"

const FeaturedProductSection = styled.section`
  margin-top: 80px;
`

const FeaturedProductHeader = styled.header`
  display: flex;
  justify-content: center;
  align-content: center;
  height: 80px;
  width: 100%;
`

const ScrollingWrapper = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(5, calc(45%));
  grid-template-rows: minmax(150px, 2fr);
`

const FeaturedProducts = () => {
  // const [products, setProducts] = useState([])

  // const config = {
  //   headers: {
  //     Referrer: "https://sacramentoconfidential.webjoint.com",
  //   },
  // }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(
  //       "https://app.webjoint.com/prod/api/products/active?facilityId=51",
  //       config
  //     )
  //     console.log(result)
  //     setProducts(result.data)
  //   }
  //   fetchData()
  // }, [])

  return (
    <FeaturedProductSection>
      <FeaturedProductHeader>
        <h2>Featured Products</h2>
      </FeaturedProductHeader>
      <ScrollingWrapper>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ScrollingWrapper>
    </FeaturedProductSection>
  )
}

export default FeaturedProducts
