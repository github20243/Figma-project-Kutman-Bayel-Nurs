import { styled } from "@mui/material";
import React from "react";

const Footer = () => {
	return (
		<StyledContainer>
			<StyledDiv>
				<StyledLeftSection>
					<StyledHeader>
						<StyledGroupImg src="src/assets/icon/Group.png" alt="Group" />
						<StyledSpanText>Zone.</StyledSpanText>
					</StyledHeader>
					<StyledInfo>
						<StyledImg src="src/assets/icon/Iconly_Light_Location.png" alt="Iconly_Light_Location" />
						<StyledSpanText_2>Dhaka, Bangladesh</StyledSpanText_2>
					</StyledInfo>
					<StyledInfo>
						<StyledImg src="src/assets/icon/Iconly_Light_Calling.png" alt="Iconly_Light_Calling" />
						<StyledSpanText_2>0943833399</StyledSpanText_2>
					</StyledInfo>
					<StyledInfo>
						<StyledImg_3 src="src/assets/icon/Iconly_Light_Message.png" alt="Iconly_Light_Message" />
						<StyledSpanText_2>support@zone.com</StyledSpanText_2>
					</StyledInfo>
					<StyledSocialLinks>
						<a href="https://www.facebook.com/profile.php?id=61559581346822"><img src="src/assets/icon/facebook.png" alt="Facebook" /></a>
						<a href="#"><img src="src/assets/icon/twitter.png" alt="Twitter" /></a>
						<a href="https://www.instagram.com/nurs_996__/"><img src="src/assets/icon/instagram.png" alt="Instagram" /></a>
						<a href="#"><img src="src/assets/icon/pinterest.png" alt="Pinterest" /></a>
					</StyledSocialLinks>
				</StyledLeftSection>
				<StyledRightSection>
					<StyledColumn>
						<StyledColumnHeader>Service</StyledColumnHeader>
						<StyledColumnItem>Order Management</StyledColumnItem>
						<StyledColumnItem>Social Assistant</StyledColumnItem>
						<StyledColumnItem>Crypto Platform</StyledColumnItem>
						<StyledColumnItem>Analyzer of the News</StyledColumnItem>
					</StyledColumn>
					<StyledColumn>
						<StyledColumnHeader>Company</StyledColumnHeader>
						<StyledColumnItem>About Us</StyledColumnItem>
						<StyledColumnItem>News</StyledColumnItem>
						<StyledColumnItem>Our trusted partner</StyledColumnItem>
						<StyledColumnItem>New users FAQ</StyledColumnItem>
					</StyledColumn>
					<StyledColumn>
						<StyledColumnHeader>Supports</StyledColumnHeader>
						<StyledColumnItem>Help center</StyledColumnItem>
						<StyledColumnItem>Feedback</StyledColumnItem>
						<StyledColumnItem>Contact us</StyledColumnItem>
						<StyledColumnItem>Terms and conditions</StyledColumnItem>
					</StyledColumn>
					<StyledColumn>
						<StyledColumnHeader>Resources</StyledColumnHeader>
						<StyledColumnItem>Download app</StyledColumnItem>
						<StyledColumnItem>Blog</StyledColumnItem>
						<StyledColumnItem>What's new</StyledColumnItem>
						<StyledColumnItem>Sitemap</StyledColumnItem>
					</StyledColumn>
				</StyledRightSection>
			</StyledDiv>
			<StyledBottom>
				<StyledBottomText>© 2021 Zone. - All rights reserved.</StyledBottomText>
				<StyledBottomLinks>
					<a href="#">Privacy</a>
					<a href="#">Security</a>
					<a href="#">Terms</a>
				</StyledBottomLinks>
			</StyledBottom>
		</StyledContainer>
	);
};

export default Footer;

const StyledContainer = styled("div")`
	background-color: #171c33;
	width: 100%;
	padding: 40px 20px;
	box-sizing: border-box;
	color: white;
`;

const StyledDiv = styled("div")`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;

const StyledLeftSection = styled("div")`
	display: flex;
	flex-direction: column;
	margin-left: 50px;
	width: 250px;
`;

const StyledHeader = styled("div")`
	display: flex;
	align-items: center;
	margin-bottom: 30px;
`;

const StyledGroupImg = styled("img")`
	width: 40px;
	height: 40px;
	margin-right: 10px;
  margin-top: 10px;
`;

const StyledSpanText = styled("span")`
	color: white;
	font-family: "Courier New", Courier, monospace;
	font-size: 27px;
	font-weight: 600;
  margin-top: 12px;
`;

const StyledInfo = styled("div")`
	display: flex;
	align-items: center;
	margin-top: 10px;
`;

const StyledImg = styled("img")`
	width: 20px;
	height: 20px;
	margin-right: 10px;
  margin-top: -60px;
`;

const StyledImg_3 = styled("img")`
	width: 20px;
	height: 20px;
	margin-right: 10px;
  margin-top: -55px;
`;

const StyledSpanText_2 = styled("span")`
	font-family: "DM Sans", sans-serif;
	font-size: 16px;
	font-weight: 400;
	line-height: 32px;
  position: relative; 
  bottom : 30px;
`;

const StyledSocialLinks = styled("div")`
	display: flex;
	margin-top: -20px;
	gap: 20px;

	a img {
		width: 30px;
		height: 30px;
	}
`;

const StyledRightSection = styled("div")`
	display: flex;
	justify-content: space-between;
	width: 70%;
	margin-right: 50px;
`;

const StyledColumn = styled("div")`
	display: flex;
	flex-direction: column;
	margin: 20px;
`;

const StyledColumnHeader = styled("p")`
	font-family: "DM Sans", sans-serif;
	font-size: 18px;
	font-weight: 700;
	margin-bottom: 10px;
`;

const StyledColumnItem = styled("p")`
	font-family: "DM Sans", sans-serif;
	font-size: 16px;
	font-weight: 400;
	margin: 5px 0;
`;

const StyledBottom = styled("div")`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 20px;
	padding: 0 50px;
	border-top: 1px solid #3a3a3a;
`;

const StyledBottomText = styled("p")`
	font-family: "DM Sans", sans-serif;
	font-size: 14px;
`;

const StyledBottomLinks = styled("div")`
	display: flex;
	gap: 20px;

	a {
		font-family: "DM Sans", sans-serif;
		font-size: 14px;
		color: white;
		text-decoration: none;
	}
`;
