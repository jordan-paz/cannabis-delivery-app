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
              compositeId
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
          compositeId: `${edge.node.compositeId}`,
          id: `${edge.node.id}`,
          type: `${edge.node.type}`,
          category: `${edge.node.category.name}`,
          subCategory: `${edge.node.subCategory && edge.node.subCategory.name}`,
        },
      })
    })
  })
}
