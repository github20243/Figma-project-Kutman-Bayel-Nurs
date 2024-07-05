import { Box, styled } from "@mui/material";
import React from "react";

const Cardswithdescription = () => {
	return (
		<Box>
			<div>
				<StyledService>Our Service </StyledService>
			</div>
		</Box>
	);
};

export default Cardswithdescription;

const StyledService = styled("p")`
	font-family:' DM Sans';
	font-size: 42px;
	font-weight: 700;
	line-height: 54.68px;
	width: 20%;
`;
