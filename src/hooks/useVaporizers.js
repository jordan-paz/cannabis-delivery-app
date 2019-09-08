import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const {
    allProduct: { edges },
  } = useStaticQuery(
    graphql`
      query LoadCartridges {
        allProduct(filter: { category: { name: { eq: "Cartridge" } } }) {
          edges {
            node {
              id
              productId
              name
              brand {
                name
              }
              image {
                url
              }
              strain {
                indicaSativaRatio
                name
              }
              variants {
                id
                flavor
                price
              }
              type
              category {
                id
                name
              }
              subCategory {
                id
                name
              }
            }
          }
        }
      }
    `
  )
  return edges.map(edge => edge.node)
}
