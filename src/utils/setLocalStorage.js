export default response => {
  return new Promise((resolve, reject) => {
    localStorage.setItem("AccessToken", response.AccessToken)
    localStorage.setItem("IdToken", response.IdToken)
    localStorage.setItem("TokenType", response.TokenType)
    localStorage.setItem("name", response.user.name)
    localStorage.setItem("userId", response.user.id)
    localStorage.setItem("companyId", 48)
    localStorage.setItem("facilityId", 51)
    localStorage.setItem("ExpiresIn", response.ExpiresIn)
    localStorage.setItem("RefreshToken", response.RefreshToken)
    localStorage.setItem("company", JSON.stringify(response.company))
    localStorage.setItem(
      "deliveryAddress",
      JSON.stringify(response.user.address)
    )
    localStorage.setItem("facilities", JSON.stringify(response.facilities))
    localStorage.setItem("user", JSON.stringify(response.user))
    resolve()
  })
}
