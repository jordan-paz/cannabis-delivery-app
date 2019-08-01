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
          id: `${edge.node.id}`,
          type: `${edge.node.type}`,
        },
      })
    })
  })
}
