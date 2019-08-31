import React, { createContext, useState, useEffect } from "react"
import api from "../utils/api"

const OrderContext = createContext({
  orderId: null,
  orderDetails: [],
  createOrder: () => {},
  orderError: null,
})

const OrderProvider = ({ children }) => {
  const [orderDetails, setOrderDetails] = useState([])

  const findQuantityOrdered = productId => {
    let count = 0
    for (var i = 0; i < orderDetails.details; i++) {
      if (orderDetails[i].productId === productId) {
        count++
      }
    }
    return count
  }

  const addToOrder = (productId, quantityToAdd = 1) => {
    const quantity = findQuantityOrdered(productId) + quantityToAdd
    if (localStorage.orderId) {
      const { orderId } = localStorage
      api.addToOrder(orderId, productId, quantity).then(data => {
        if (data.error === "SHOP_CLOSED") {
          alert("Shop is closed")
        } else {
          setOrderDetails(data.details)
        }
      })
    } else {
      api.createOrder().then(data => {
        localStorage.setItem("orderId", data._id)
        api.addToOrder(data._id, productId, quantity)
      })
    }
  }

  useEffect(() => {
    if (localStorage.orderId) {
      api.getOrder().then(result => setOrderDetails(result.details))
    } else {
      setOrderDetails([])
    }
  }, [])

  return (
    <OrderContext.Provider
      value={{
        addToOrder,
        orderDetails,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export default OrderProvider
export { OrderContext }
