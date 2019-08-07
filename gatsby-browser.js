import React from "react"
import AuthProvider from "./src/context/authContext"
export const wrapRootElement = ({ element }) => (
  <AuthProvider>{element}</AuthProvider>
)
