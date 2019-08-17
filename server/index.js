const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const fetch = require("node-fetch")

require("dotenv").config()

const app = express()

app.use(express.json())
app.use(morgan("tiny"))
app.use(cors())

const url = "https://app.webjoint.com/prod/api/users/login"

const login = (email, password) =>
  fetch(url, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Referer: "https://sacramentoconfidential.webjoint.com/shop/index.html",
    },
  }).then(response => response.json())

app.post("/login", async (req, res) => {
  res.send(await login(req.body.email, req.body.password))
})

const notFound = (req, res, next) => {
  const error = new Error("Not Found")
  res.status(404)
  next(error)
}

const errorHandler = (error, req, res, next) => {
  res.status(res.statusCode || 500)
  res.json({
    message: error.message,
  })
}

app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log("Listening on port", port)
})
