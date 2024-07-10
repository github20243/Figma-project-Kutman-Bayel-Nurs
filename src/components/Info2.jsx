import { styled } from "@mui/material";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Info2 = () => {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        x: 0,
        transition: { duration: 3, ease: "easeOut" }
      });
      controls.start({
        y: [0, -50, 0, 50, 0],
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
      <StyledH1Text
        as={motion.h1}
        initial={{ color: "#FFFFFF", y: -10 }}
        animate={{ color: ["#FFFFFF", "#FF00FF", "#00FFFF", "#FFFFFF"], y: 0 }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        Мы завершаем каждый проект <br />
        с особым вниманием к потребностям клиента
      </StyledH1Text>
      <StyledPText
        as={motion.p}
        initial={{ color: "#FFFFFF", y: -10 }}
        animate={{ color: ["#FFFFFF", "#FF00FF", "#00FFFF", "#FFFFFF"], y: 0 }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        Мы предлагаем широкий спектр услуг в сфере веб-разработки. Наша команда
        состоит из профессионалов, способных реализовать проекты любой сложности.
        Основные направления нашей работы:
        <ul>
          <li>Разработка пользовательских интерфейсов</li>
          <li>Интеграция современных технологий</li>
          <li>Оптимизация производительности и безопасности</li>
        </ul>
        Наша цель - создание эффективных решений, отвечающих всем требованиям
        заказчика и соответствующих современным стандартам веб-разработки.
      </StyledPText>
      <StyledBtn
        as={motion.button}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ backgroundColor: "#3660eb", boxShadow: "0 0 20px rgba(0,0,255,0.5)", y: -10 }}
        animate={{ backgroundColor: "#7456ed", boxShadow: "0 0 20px rgba(255,0,255,0.8)", y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        Читать далее
      </StyledBtn>
      <StyledImg
        as={motion.img}
        src="src/assets/img/man-working-using-virtual-reality-4019408-3337377@0 1 (1).png"
        alt=""
        initial={{ x: -1000 }}
        animate={controls}
      />
    </StyledContainer>
  );
};

export default Info2;

const StyledContainer = styled("div")`
  background-color: #141e41;
  width: 100%;
  height: 650px;
  margin: 0 auto;
`;

const StyledH1Text = styled(motion.h1)`
  font-family: sans-serif;
  font-weight: 700;
  font-size: 26px;
  color: white;
  margin-left: 135px;
  padding-top: 90px; /* Поднял тексты чуть выше */
  width: 40%;
`;

const StyledPText = styled(motion.p)`
  color: white;
  margin-left: 135px;
  margin-top: 20px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 16px;
  width: 40%;

  ul {
    list-style-type: disc;
    margin-left: 20px;
    margin-top: 10px;
  }

  li {
    margin-bottom: 5px;
  }
`;

const StyledBtn = styled(motion.button)`
  width: 120px;
  height: 40px;
  margin-left: 135px;
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

const StyledImg = styled(motion.img)`
  margin-left: 850px;
  margin-top: -400px;
`;
