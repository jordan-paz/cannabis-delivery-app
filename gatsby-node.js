const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const productTemplate = path.resolve(`src/templates/product-page.js`)

  return graphql(
    `
      query LoadProducts {
        allProduct {
          edges {
            node {
              id
              type
              category {
                name
              }
              subCategory {
                name
              }
              productId
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create product pages.
    result.data.allProduct.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `products/${edge.node.id}`,
        component: productTemplate,
        context: {
          productId: `${edge.node.productId}`,
          id: `${edge.node.id}`,
          type: `${edge.node.type}`,
          category: `${edge.node.category.name}`,
          subCategory: `${edge.node.subCategory && edge.node.subCategory.name}`,
        },
      })
    })
  })
}
