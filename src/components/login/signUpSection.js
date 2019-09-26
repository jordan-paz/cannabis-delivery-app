import React from "react"
import { Link } from "gatsby"
import { StyledSignupSection, StyledSignupButton } from "./styledComponents"

export default () => {
  return (
    <StyledSignupSection>
      <span>
        New to SCD?
        <Link to="/signup">
          <StyledSignupButton>Sign up</StyledSignupButton>
        </Link>
      </span>
    </StyledSignupSection>
  )
}
