import { Box, styled } from '@mui/material'
import React from 'react'

const Cardswithdescription = () => {



  return (
    <Box>
        <div>

    <StyledService>Our Service </StyledService>
    <StyledText> and are driven to ask better questions in the pursuit <br /> of making work.</StyledText>
        </div>


    </Box>
  )
}

export default Cardswithdescription

const  StyledService = styled('p')`
    font-family: DM Sans;
font-size: 42px;
font-weight: 700;
line-height: 54.68px;
text-align: left;

`

const StyledText = styled('p')`
    font-family: DM Sans;
font-size: 16px;
font-weight: 400;
line-height: 26px;
text-align: center;
color: white;

`