import React, { createContext, useState, useEffect } from "react"
import apiGetOrder from "../utils/apiGetOrder"
import apiAddToOrder from "../utils/apiAddToOrder"
import apiCreateOrder from "../utils/apiCreateOrder"

const OrderContext = createContext({
  orderId: null,
  orderDetails: [],
  createOrder: () => {},
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
    apiAddToOrder(productId, quantity).then(data => console.log(data))
    // setOrderDetails(response.details)
  }

  useEffect(() => {
    if (localStorage.orderId) {
      apiGetOrder().then(result => setOrderDetails(result.details))
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
