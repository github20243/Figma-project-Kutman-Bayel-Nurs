import { styled } from "@mui/material";
import React from "react";

const Info = () => {
	return (
		<StyledContainer>
			<StyledImg
				src="src/assets/img/man-working-using-virtual-reality-4019408-3337377@0 1.png"
				alt="photo"
			/>
			<StyledH1Text>
				We complete every projects <br />
				extra care as customer need
			</StyledH1Text>
			<StyledPText>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum
				risus, <br /> non suscipit arcu. Quisque aliquam posuere tortor, sit amet
				convallis nuncoe <br /> scelerisque in. orem ipsum dolor sit amet, consectetur
				adipisicing elit. Labore <br /> eius molestiae facere, natus reprehenderit
				eaque eum, autem ipsam. Magfini, <br /> error. Tempora odit laborum iure
				inventore possimus laboriosam qui nam.{" "}
			</StyledPText>
      <StyledBtn>Read more</StyledBtn>
		</StyledContainer>
	);
};

export default Info;

const StyledContainer = styled("div")`
	background-color: #141e41;
	width: 100%;
	height: 729px;
	margin: 0 auto;
`;

const StyledImg = styled("img")`
	margin-left: 120px;
  margin-top: 50px;
`;

const StyledH1Text = styled("h1")`
	font-family: sans-serif;
	font-weight: 700;
	font-size: 42px;
	color: white;
	margin-left: 750px;
	margin-top: -480px;
	width: 37%;
`;

const StyledPText = styled("p")`
  color: white;
	margin-left: 750px;
	margin-top: 20px;
  font-family: Arial, Helvetica, sans-serif;
	font-weight: 400;
	font-size: 16px;
  width: 40%;
`

const StyledBtn = styled('button')`
  width: 99px;
  height: 31px;
  margin-left: 750px;
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
`