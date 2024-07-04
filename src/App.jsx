import styled from '@mui/material'
import './App.css'
import Cardswithdescription from './components/Cardswithdescription'
import Info from './components/Info'
import Info2 from './components/Info2'

function App() {

  return (
    <>
     <StyledContoinet>
   {/* <Cardswithdescription /> */}
      <Info/>
      <Info2/>
     </StyledContoinet> 
    </>
  )
}

export default App

const StyledContoinet =styled.div`
  width: 1400px;
  min-height: 600px;
`


