import styled from 'styled-components'

export const Maincontainer = styled.div`
  background-color: #24263c;
  min-height: 100vh;
  color: #ffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

export const Cardcontainer = styled.div`
  background-color: #383a4e;
  padding: 50px 10px 50px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-radius: 10px;
  max-width: 350px;
`

export const Heading = styled.h1`
  font-weight: 500;
  margin-bottom: 20px;
  font-family: 'Roboto';
`

export const Sub = styled.p`
  margin-bottom: 20px;
`

export const SearchInput = styled.input`
  outline: none;
  margin: 0px 20px 20px 20px;
  height: 30px;
  border: none;
  border-radius: 5px;
  padding: 10px;
`

export const Errormsg = styled.p`
  color: #ef4444;
  font-size: 13px;
`
