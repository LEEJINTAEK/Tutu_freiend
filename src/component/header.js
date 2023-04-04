import React, { useState } from "react";
import searchImage from "../img/icons8-search-24.png";
import styled from "styled-components";

const SectionContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
  margin: 0 auto;
  padding: 0 3rem;
`;
const Logo = styled.h1`
  width: 85px;
  font-size: 2rem;
  font-weight: bolder;
`;

const FormDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const SearchImg = styled.img`
  position: relative;
  right: 2rem;
  bottom: 0.3rem;
`;

const LoginDiv = styled.div`
  display: flex;
  align-items: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 0.8rem;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 50px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  width: 100%;
  max-width: 500px;
`;

const TutuButton = styled.button`
  padding: 10px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.5);
  color: rgb(48, 52, 65);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease 0s, border-color 0.3s ease 0s;

  &:hover {
    background-color: #bfbfbf;
  }
`;

const LoginButton = styled.button`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  background-color: #0077cc;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease 0s, border-color 0.3s ease 0s;
  margin-left: 1rem;

  &:hover {
    background-color: #005fa3;
  }
`;

function Header() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`/api/search?q=${query}`);
    const data = await response.json();
    setResults(data.results);
  };

  return (
    <SectionContainer>
      {/* 로고 */}
      <Logo>tutu</Logo>
      {/* 검색버튼 */}
      <div></div>
      <div></div>
      <div></div>
      <FormDiv>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="검색어를 입력하세요"
            value={query}
            onChange={handleInputChange}
          />
          <SearchImg src={searchImage} alt="search" />
        </Form>
        {results.length > 0 && (
          <ul>
            {results.map((result) => (
              <li key={result.id}>{result.title}</li>
            ))}
          </ul>
        )}
      </FormDiv>
      {/* 회원가입 및 로그인 */}
      <LoginDiv>
        <TutuButton type="button">튜터등록</TutuButton>
        <TutuButton type="button">튜터찾기</TutuButton>
        <LoginButton type="button">로그인</LoginButton>
      </LoginDiv>
    </SectionContainer>
  );
}

export default Header;
