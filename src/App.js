import "./App.css";
import Header from "./component/header";
import Slide from "./component/slider";
import React, { useState } from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  min-width: 1100px;
`;

function App() {
  // 슬라이드 이미지
  const images = [
    "http://img.marieclairekorea.com/2017/01/mck_586f404146910-375x375.jpg",
    "https://mblogthumb-phinf.pstatic.net/MjAxNzAzMjdfODIg/MDAxNDkwNjEwNDA0MzM0.c4SZEA5JFpJcc40a-l2EqRVpjtg2hk57F0NJER3yXoEg.I4JHmmJgg7hxe-bs0CvJkm9FgClJ3am8y8NjTFa420Ug.JPEG.achika0123/muji.jpg?type=w800",
    "https://item.kakaocdn.net/do/30cef086c8778d80e1487385bd5efe7b8f324a0b9c48f77dbce3a43bd11ce785",
  ];

  return (
    <MainDiv>
      <Header></Header>
      <Slide images={images}></Slide>
    </MainDiv>
  );
}

export default App;
