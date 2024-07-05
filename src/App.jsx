import {styled} from '@mui/material'
import './App.css'
import Cardswithdescription from './components/Cardswithdescription'
import Info from './components/Info'
import Info2 from './components/Info2'
import Footer from './components/Footer'

function App() {

  return (
    <>
     <StyledContoinet>
   {/* <Cardswithdescription /> */}
      <Info/>
      <Info2/>
      <Footer/>
     </StyledContoinet> 
    </>
  )
}

export default App;

const StyledContoinet = styled("div")`
	width: 1519px;
	min-height: 600px;
  margin: 0 auto;
`;
