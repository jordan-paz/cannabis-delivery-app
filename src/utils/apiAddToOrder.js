import axios from "axios"

export default (orderId, productId, quantity) => {
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
}
