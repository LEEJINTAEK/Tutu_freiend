import "./App.css";
import React, { useState } from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: block;
`;

const SectionContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  width: 100%;
`;
const Logo = styled.h1`
  width: 85px;
  padding-left: 10px;
  font-size: 2rem;
  font-weight: bolder;
`;

const FormDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const LoginDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
`;
const LoginAndSearchDiv = styled.div`
  display: flex;
  width: 50%;
  flex-direciton: row;
  justify-content: space-around;
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 0.8rem;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  width: 100%;
  max-width: 500px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  background-color: #0077cc;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #005fa3;
  }
`;

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  min-witdh: 1200px;
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
    <HeaderContainer>
      <SectionContainer>
        {/* 로고 */}
        <Logo>tutu</Logo>
        {/* 검색버튼 */}
        <LoginAndSearchDiv>
          <FormDiv>
            <Form onSubmit={handleSubmit}>
              <Input
                type="text"
                placeholder="검색어를 입력하세요"
                value={query}
                onChange={handleInputChange}
              />
              <button type="submit">Search</button>
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
            <Button type="button">튜터등록</Button>
            <Button type="button">로그인</Button>
            <Button type="button">회원가입</Button>
          </LoginDiv>
        </LoginAndSearchDiv>
      </SectionContainer>
    </HeaderContainer>
  );
}

function App() {
  return (
    <MainDiv>
      <Header></Header>
    </MainDiv>
  );
}

export default App;
