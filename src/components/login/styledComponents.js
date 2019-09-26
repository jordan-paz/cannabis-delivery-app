import styled from "styled-components"
import DialogTitle from "@material-ui/core/DialogTitle"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Dialog from "@material-ui/core/Dialog"

export const StyledDialog = styled(Dialog)`
  @media only screen and (min-width: 960px) {
    border-radius: 5px;
    margin: auto auto;
    width: 60%;
    height: 70%;
    .MuiDialog-paperFullScreen {
      border-radius: 5px;
    }
  }
`

export const DialogWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 85%;
  align-items: center;
  margin-top: 40px;
`

export const CloseButton = styled(Button)`
  position: absolute;
  right: 10px;
  top: 10px;
`

export const SubmitButton = styled(Button)`
  margin-top: 20px;
  width: 100%;
  background-color: #eee;
`

export const OpenModalButton = styled(Button)`
  max-height: 80%;
  background-color: #eaedec;
  border: none;
  color: #000;
  :hover {
    border: none;
  }
`

export const StyledSignupSection = styled.section`
  span {
    font-size: 15px;
  }
`

export const StyledSignupButton = styled(Button)`
  font-size: 15px;
  margin-left: 10px;
  border: none;
  background-color: #eaedec;
  padding: 2px 10px;
  border-radius: 2px;
  :hover {
    cursor: pointer;
  }
  :focus {
    outline: 0;
  }
`

export const ForgotSpan = styled.span`
  font-size: 14px;
  margin-top: 20px;
  margin: 10px auto 0 10px;
`

export const StyledTitle = styled(DialogTitle)`
  margin-bottom: 10px;
`

export const StyledTextField = styled(TextField)``
