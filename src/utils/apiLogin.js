export default async (email, password) => {
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
}
