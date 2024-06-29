import {useState} from 'react'
import {
  Maincontainer,
  Cardcontainer,
  Heading,
  Sub,
  SearchInput,
  Errormsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [msg, updateMsg] = useState('')
  const [isError, errorUpdate] = useState(true)

  const OnUserInput = event => {
    const userInput = msg.length
    if (userInput < 8) {
      errorUpdate(true)
      updateMsg(event.target.value)
    } else {
      errorUpdate(false)
      updateMsg(event.target.value)
    }
  }
  return (
    <Maincontainer>
      <Cardcontainer>
        <Heading>Password Validator</Heading>
        <Sub> Check how strong and secure is your password</Sub>
        <SearchInput type="password" value={msg} onChange={OnUserInput} />
        {isError && (
          <Errormsg>Your password must be at least 8 characters</Errormsg>
        )}
      </Cardcontainer>
    </Maincontainer>
  )
}
export default PasswordValidator
