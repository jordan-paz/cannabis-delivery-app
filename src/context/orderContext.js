import React, { createContext, useState, useEffect } from "react"

const OrderContext = createContext({
  addToOrder: () => {},
  products: [],
  subtotal: 0,
})

const OrderProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [subtotal, setSubtotal] = useState(0)

  useEffect(() => {
    if (products.length === 0) {
      const products = JSON.parse(localStorage.getItem("products"))
      setProducts(products ? products : [])
    }
  }, [products.length])

  const addToOrder = (product, quantityToAdd = 1) => {
    for (let i = 0; i < quantityToAdd; i++) {
      setProducts([...products, product])
      localStorage.setItem("products", JSON.stringify([...products, product]))
      setSubtotal(subtotal + product.variants[0].price)
    }
  }

  const removeItem = id => {
    const index = products.map(product => product.id).indexOf(id)
    let newProducts = [...products]
    if (index !== -1) {
      newProducts.splice(index, 1)
      setProducts(newProducts)
      localStorage.setItem("products", JSON.stringify(newProducts))
      setSubtotal(subtotal - products[index].variants[0].price)
    }
  }

  return (
    <OrderContext.Provider
      value={{
        addToOrder,
        removeItem,
        products,
        subtotal,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export default OrderContext
export { OrderProvider }
