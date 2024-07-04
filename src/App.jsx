import styled from '@mui/material'
import './App.css'
import Cardswithdescription from './components/Cardswithdescription'
import Info from './components/Info'

function App() {

  return (
    <>
     <StyledContoinet>
   <Cardswithdescription />
      <Info/>
     </StyledContoinet> 
    </>
  )
}

export default App

const StyledContoinet =styled.div`
  width: 1400px;
  min-height: 600px;
  border: 1px solid red;
`


