const axios = require("axios")

export default () => {
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
}
