const axios = require("axios")

export default () => {
  const deliveryAddress = localStorage.deliveryAddress
    ? localStorage.deliveryAddress
    : null
  const idToken = localStorage.IdToken
  const url = `http://localhost:5000/order/createOrder`
  const data = { deliveryAddress }
  return axios
    .post(url, data, {
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${idToken}`,
      },
    })
    .then(response => {
      localStorage.setItem("orderId", response.data._id)
      return response.data
    })
    .catch(err => console.log(err))
}
