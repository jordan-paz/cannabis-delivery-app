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
