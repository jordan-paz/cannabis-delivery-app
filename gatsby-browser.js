import React from "react"
import AuthProvider from "./src/context/authContext"
import OrderProvider from "./src/context/orderContext"
export const wrapRootElement = ({ element }) => (
  <AuthProvider>
    <OrderProvider>{element}</OrderProvider>
  </AuthProvider>
)
