const fetch = require("node-fetch")
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
  const apiUrl = `https://app.webjoint.com/prod/api/products/active?facilityId=51&range=[0,5000]`
  return fetch(apiUrl, {
    headers: { Referer: "https://sacramentoconfidential.webjoint.com" },
  })
    .then(response => response.json())
    .then(data => {
      data.forEach(product => {
        const nodeData = processProduct(product)
        createNode(nodeData)
      })
    })
}
