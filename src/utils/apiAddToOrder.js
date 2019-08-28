import axios from "axios"
import apiCreateOrder from "./apiCreateOrder"

export default (productId, quantity) => {
  const addToOrder = (orderId, productId, quantity = 1) => {
    const url = `http://localhost:5000/order/${orderId}/addToOrder/${productId}/${quantity}`
    const authorization = `bearer ${localStorage.IdToken}`
    const headers = {
      "Content-Type": "application/json",
      authorization,
    }
    const data = {}
    return axios
      .post(url, data, {
        headers,
      })
      .then(response => response.data)
      .catch(err => console.log(err))
  }

  if (!localStorage.orderId) {
    return apiCreateOrder().then(data => {
      addToOrder(data._id, productId, quantity)
    })
  } else {
    return addToOrder(localStorage.orderId, productId, quantity)
  }
}
