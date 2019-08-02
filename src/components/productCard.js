import React from "react"
import styled from "styled-components"
import weed from "../images/can.jpg"
import { Card } from "@material-ui/core"
import CardContent from "@material-ui/core/CardContent"
import { Link } from "gatsby"

const ProductCardImg = styled.img`
  max-width: 100%;
`

const ProductCard = ({ node: { name, type, thc, id, image, variants } }) => {
  const { url } = image
  const { price } = variants[0]
  return (
    <Link to={`products/${id}`}>
      <Card>
        <CardContent>
          <ProductCardImg src={url ? url : weed} />
          <p>
            <b>{name}</b>
          </p>
          <p>${price}</p>
          <p>{type}</p>
          {thc ? <p>"THC:" + thc + "%" </p> : null}
        </CardContent>
      </Card>
    </Link>
  )
}

export default ProductCard
