import styled from "styled-components"
import Button from "@material-ui/core/Button"

export const FormWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  margin-top: 40px;
`

export const Title = styled.h1`
  margin-top: 70px;
  margin-bottom: 0px;
`
export const CloseButton = styled(Button)`
  position: absolute;
  right: 10px;
  top: 10px;
`
