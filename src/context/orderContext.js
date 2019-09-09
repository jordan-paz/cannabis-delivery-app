import React, { createContext, useState, useEffect } from "react"

const OrderContext = createContext({
  addToOrder: () => {},
  products: [],
})

const OrderProvider = ({ children }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    if (products.length === 0) {
      const products = JSON.parse(localStorage.getItem("products"))
      setProducts(products ? products : [])
    }
  })

  const addToOrder = (product, quantityToAdd = 1) => {
    for (let i = 0; i < quantityToAdd; i++) {
      setProducts([...products, product])
      localStorage.setItem("products", JSON.stringify([...products, product]))
    }
  }

  const removeItem = id => {
    const index = products.map(product => product.id).indexOf(id)
    let newProducts = [...products]
    if (index !== -1) {
      newProducts.splice(index, 1)
      setProducts(newProducts)
      localStorage.setItem("products", JSON.stringify(newProducts))
    }
  }

  return (
    <OrderContext.Provider
      value={{
        addToOrder,
        removeItem,
        products,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export default OrderContext
export { OrderProvider }
