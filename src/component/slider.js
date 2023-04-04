import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Slider = styled.div`
  width: 70%;
  height: 400px;
  overflow: hidden;
  position: relative;
  left: 15%;
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  z-index: 9;
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const width = 100 * images.length;
  const translateX = currentIndex * (100 / images.length);

  const previousSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(
        currentIndex === images.length - 1 ? 0 : currentIndex + 1
      );
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);

  return (
    <Slider>
      <SliderImages width={width} translateX={translateX}>
        {images.map((image, index) => (
          <SliderImage key={index} src={image} alt={`Slide ${index}`} />
        ))}
      </SliderImages>
      <SliderButtons>
        <SliderButton onClick={previousSlide}>이전</SliderButton>
        <SliderButton onClick={nextSlide}>다음</SliderButton>
      </SliderButtons>
    </Slider>
  );
};

export default Slide;
