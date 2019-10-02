import React from "react"
import { AuthProvider } from "./src/context/authContext"
import { OrderProvider } from "./src/context/orderContext"
import { IdentityContextProvider } from "react-netlify-identity"
export const wrapRootElement = ({ element }) => {
  const url = "https://distracted-wing-284d17.netlify.com"
  return (
    <IdentityContextProvider url={url}>
      <AuthProvider>
        <OrderProvider>{element}</OrderProvider>
      </AuthProvider>
    </IdentityContextProvider>
  )
}
