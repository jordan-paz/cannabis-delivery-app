import React, { createContext, useState, useEffect } from "react"
import sizeof from "object-sizeof"

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

  return (
    <OrderContext.Provider
      value={{
        addToOrder,
        products,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export default OrderContext
export { OrderProvider }
