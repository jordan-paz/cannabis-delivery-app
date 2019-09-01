import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const {
    allProduct: { edges },
  } = useStaticQuery(
    graphql`
      query LoadPreRolls {
        allProduct(filter: { category: { name: { eq: "Pre-Roll" } } }) {
          edges {
            node {
              type
              category {
                name
              }
              subCategory {
                name
              }
              description
              featured
              id
              image {
                url
              }
              name
              variants {
                price
                productId
                unitWeight
                unit
                flavor
                description
              }
            }
          }
        }
      }
    `
  )
  return edges.map(edge => edge.node)
}
