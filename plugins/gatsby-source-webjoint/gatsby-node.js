const fetch = require("node-fetch")
const queryString = require("query-string")
exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions
  delete configOptions.plugins
  const processProduct = product => {
    const nodeId = createNodeId(`product-${product.id}`)
    const nodeContent = JSON.stringify(product)
    const nodeData = Object.assign({}, product, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `Product`,
        content: nodeContent,
        contentDigest: createContentDigest(product),
      },
    })
    return nodeData
  }
  // Join apiOptions with the Pixabay API URL
  const apiUrl = `https://app.webjoint.com/prod/api/products/active?facilityId=51&range=[0,5000]`
  // Gatsby expects sourceNodes to return a promise
  return (
    // Fetch a response from the apiUrl
    fetch(apiUrl, {
      headers: { Referer: "https://sacramentoconfidential.webjoint.com" },
    })
      // Parse the response as JSON
      .then(response => response.json())
      // Process the response data into a node
      .then(data => {
        // For each query result (or 'hit')
        data.forEach(product => {
          // Process the photo data to match the structure of a Gatsby node
          const nodeData = processProduct(product)
          // Use Gatsby's createNode helper to create a node from the node data
          createNode(nodeData)
        })
      })
  )
}
