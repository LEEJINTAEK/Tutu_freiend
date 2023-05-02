import React, { useState, useEffect } from "react";
import styled from "styled-components";

const RankBox = styled.div`
  width: 100%;
  display: flex;
  flex-direcion: row;
  justify-content: center;
  align-items: center;
  background-color: #f5deb3;
  padding: 70px;
  height: 350px;
`;
const SliderText = styled.div`
  font-size: 30px;
  max-width: 700px;
  min-width: 700px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 3px black;
  border-radius: 50px;
  font-size: 50px;
`;

const Slider = styled.div`
  width: 50%;
  max-width: 900px;
  min-width: 700px;
  height: 400px;
  overflow: hidden;
  position: relative;
`;

const SliderImages = styled.div`
  width: ${(props) => props.width}%;
  height: 100%;
  display: flex;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-${(props) => props.translateX}%);
`;

const SliderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const SliderButtons = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  z-index: 9;
  width: 100%;
`;

const SliderButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 30px;
  color: black;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ccc;
  }
`;

const Slide = ({ images }) => {
  let imagesVal = Object.values(images);
  let imagesKey = Object.keys(images);

  const [currentIndex, setCurrentIndex] = useState(0);
  const width = 100 * imagesVal.length;
  const translateX = currentIndex * (100 / imagesVal.length);

  const previousSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? imagesVal.length - 1 : currentIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex(
      currentIndex === imagesVal.length - 1 ? 0 : currentIndex + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(
        currentIndex === imagesVal.length - 1 ? 0 : currentIndex + 1
      );
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex, imagesVal.length]);

  return (
    <RankBox>
      <SliderText style={{ fontFamily: "Single Day" }}>
        <p>
          TuTu의 정보통신공학부{" "}
          <span style={{ fontSize: "70px" }}>Best Tuter</span>
        </p>
      </SliderText>
      <Slider>
        <SliderImages width={width} translateX={translateX}>
          {imagesVal.map((image, index) => (
            <SliderImage key={index} src={image} alt={imagesKey[index]} />
          ))}
        </SliderImages>
        <SliderButtons>
          <SliderButton onClick={previousSlide}>이전</SliderButton>
          <SliderButton onClick={nextSlide}>다음</SliderButton>
        </SliderButtons>
      </Slider>
    </RankBox>
  );
};

export default Slide;
