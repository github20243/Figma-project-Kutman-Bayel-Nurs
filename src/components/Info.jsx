import { styled } from "@mui/material";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Info = () => {
	const controls = useAnimation();

	useEffect(() => {
		const sequence = async () => {
			await controls.start({
				x: 0,
				transition: { duration: 3, ease: "easeOut" }
			});
			controls.start({
				y: [0, -100, 0, 100, 0],
				transition: {
					duration: 5,
					ease: "easeInOut",
					repeat: Infinity
				}
			});
		};

		sequence();
	}, [controls]);

	return (
		<StyledContainer>
			<StyledImg
				as={motion.img}
				src="src/assets/img/man-working-using-virtual-reality-4019408-3337377@0 1.png"
				alt="photo"
				initial={{ x: -1000 }}
				animate={controls}
			/>
			<StyledH1Text
				as={motion.h1}
				initial={{ color: "#FFFFFF" }}
				animate={{ color: ["#FFFFFF", "#FF00FF", "#00FFFF", "#FFFFFF"] }}
				transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
			>
				О фронтенд разработке <br />
				Байел Кутман Нурислам
			</StyledH1Text>
			<StyledPText
				as={motion.p}
				initial={{ color: "#FFFFFF" }}
				animate={{ color: ["#FFFFFF", "#FF00FF", "#00FFFF", "#FFFFFF"] }}
				transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
			>
				Байел Кутман Нурислам — это преданный своему делу фронтенд разработчик, 
				специализирующийся на создании интерактивных и удобных веб-интерфейсов. <br />
				Он специализируется на использовании современных технологий, таких как React, 
				styled-components и Framer Motion, чтобы оживить дизайны. <br />
				С увлечением к программированию и вниманием к деталям, Байел гарантирует, что каждый проект, 
				над которым он работает, соответствует самым высоким стандартам качества и производительности. <br />
				Его стремление к совершенству и непрерывному обучению позволяет ему оставаться в авангарде 
				постоянно развивающейся области веб-разработки.
			</StyledPText>
			<StyledBtn
				as={motion.button}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				initial={{ backgroundColor: "#3660eb", boxShadow: "0 0 20px rgba(0,0,255,0.5)" }}
				animate={{ backgroundColor: "#7456ed", boxShadow: "0 0 20px rgba(255,0,255,0.8)" }}
			>
				Read more
			</StyledBtn>
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

const StyledImg = styled(motion.img)`
	margin-left: 120px;
	margin-top: 50px;
`;

const StyledH1Text = styled(motion.h1)`
	font-family: sans-serif;
	font-weight: 700;
	font-size: 42px;
	color: white;
	margin-left: 750px;
	margin-top: -480px;
	width: 37%;
`;

const StyledPText = styled(motion.p)`
	color: white;
	margin-left: 750px;
	margin-top: 20px;
	font-family: Arial, Helvetica, sans-serif;
	font-weight: 400;
	font-size: 16px;
	width: 40%;
`;

const StyledBtn = styled(motion.button)`
	width: 130px;
	height: 40px;
	margin-left: 750px;
	margin-top: 30px;
	background-color: #3660eb;
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	font-size: 16px;
	transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;

	&:hover {
		background-color: #7456ed;
		box-shadow: 0 0 20px rgba(255,0,255,0.8);
	}

	&:focus {
		outline: none;
	}

	&:active {
		transform: scale(0.9);
	}
`;
