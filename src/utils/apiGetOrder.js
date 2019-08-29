export default () => {
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
}
