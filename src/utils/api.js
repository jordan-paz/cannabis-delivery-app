const axios = require("axios")
const baseUrl = `https://cryptic-stream-41886.herokuapp.com/order`

export default {
  addToOrder: (orderId, productId, quantity) => {
    const url = `${baseUrl}/${orderId}/addToOrder/${productId}/${quantity}`
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
  },

  createOrder: () => {
    const deliveryAddress = localStorage.deliveryAddress
      ? localStorage.deliveryAddress
      : null
    const { IdToken } = localStorage
    const url = `${baseUrl}/order/createOrder`
    const data = { deliveryAddress }
    return axios
      .post(url, data, {
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${IdToken}`,
        },
      })
      .then(response => response.data)
      .catch(err => console.log(err))
  },
  getOrder: () => {
    try {
      const { orderId } = localStorage
      const url = `${baseUrl}/order/${orderId}`
      return fetch(url, {
        method: "GET",
        headers: {
          orderid: ` ${localStorage.orderId}`,
          authorization: `bearer ${localStorage.IdToken}`,
        },
      })
        .then(response => response.json())
        .catch(function(error) {
          console.log(error)
        })
    } catch (err) {
      console.log(err)
    }
  },

  login: (email, password) => {
    const url = `${baseUrl}/login`
    const data = { email, password }
    return axios
      .post(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(response => response.data)
      .catch(err => console.log(err))
  },
}
