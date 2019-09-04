import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const {
    allProduct: { edges },
  } = useStaticQuery(
    graphql`
      query LoadTinctures {
        allProduct(filter: { category: { name: { eq: "Topical" } } }) {
          edges {
            node {
              id
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
