import React, { createContext, useState } from "react"

const OrderContext = createContext({
  addToOrder: () => {},
  products: [],
})

const OrderProvider = ({ children }) => {
  const [products, setProducts] = useState([])

  const addToOrder = (productId, quantityToAdd = 1) => {
    for (let i = 0; i < quantityToAdd; i++) {
      setProducts([...products, productId])
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
