import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const {
    allProduct: { edges },
  } = useStaticQuery(
    graphql`
      query loadConcentrates {
        allProduct(
          filter: {
            subCategory: { name: { in: ["Sauce", "Crumble", "Applicator"] } }
          }
        ) {
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
