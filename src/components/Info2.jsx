import { styled } from "@mui/material";
import React from "react";

const Info2 = () => {
	return (
		<StyledContainer_2>
			<StyledH1Texts>
				We complete every project <br />
				extra care as customer need
			</StyledH1Texts>
			<StyledPTexts>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum
				risus, <br /> non suscipit arcu. Quisque aliquam posuere tortor, sit
				amet convallis nuncoe <br /> scelerisque in. orem ipsum dolor sit amet,
				consectetur adipisicing elit. Labore <br /> eius molestiae facere, natus
				reprehenderit eaque eum, autem ipsam. Magfini, <br /> error. Tempora
				odit laborum iure inventore possimus laboriosam qui nam.{" "}
			</StyledPTexts>
			<StyledBtnn>Read more</StyledBtnn>
      <StyledImages src="src/assets/img/man-working-using-virtual-reality-4019408-3337377@0 1 (1).png" alt="" />
		</StyledContainer_2>
	);
};

export default Info2;

const StyledContainer_2 = styled("div")`
	background-color: #141e41;
	width: 100%;
	height: 650px;
	margin: 0 auto;
`;

const StyledH1Texts = styled("h1")`
	font-family: sans-serif;
	font-weight: 700;
	font-size: 42px;
	color: white;
	margin-left: 135px;
	padding-top: 120px;
	width: 40%;
`;

const StyledPTexts = styled("p")`
	color: white;
	margin-left: 135px;
	margin-top: 20px;
	font-family: Arial, Helvetica, sans-serif;
	font-weight: 400;
	font-size: 16px;
	width: 40%;
`;

const StyledBtnn = styled("button")`
	width: 99px;
	height: 31px;
	margin-left: 135px;
	margin-top: 30px;
	background: linear-gradient(45deg, #3660eb, #7456ed);
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	font-size: 16px;
	transition: background 0.3s ease;

	&:hover {
		background: linear-gradient(45deg, #7456ed, #3660eb);
	}
`;

const StyledImages = styled("img")`
	margin-left: 850px;
  margin-top: -400px;
`;