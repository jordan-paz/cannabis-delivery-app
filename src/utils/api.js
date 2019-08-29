const axios = require("axios")

export default {
  addToOrder: (orderId, productId, quantity) => {
    const url = `https://cryptic-stream-41886.herokuapp.com/order/${orderId}/addToOrder/${productId}/${quantity}`
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
    const idToken = localStorage.IdToken
    const url = `https://cryptic-stream-41886.herokuapp.com/order/createOrder`
    const data = { deliveryAddress }
    return axios
      .post(url, data, {
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${idToken}`,
        },
      })
      .then(response => response.data)
      .catch(err => console.log(err))
  },
  getOrder: () => {
    try {
      const { orderId } = localStorage
      const url = `https://cryptic-stream-41886.herokuapp.com/order/${orderId}`
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

  login: async (email, password) => {
    return await fetch("https://cryptic-stream-41886.herokuapp.com/login", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => response.json())
      .catch(function(error) {
        console.log(error)
      })
  },
}
