import React from "react";
import styled from "styled-components";
import { Filter,Magnify } from "../../assets/";

function SearchBar() {
  return (
    <MainDiv>
      <InputContainer>
        <img src={Magnify} style={{padding: 10}} alt="replace"></img>
        <TextField placeholder="Search" />
      </InputContainer>
      <FilterContainer>
        <img src={Filter} alt="replace"/>
      </FilterContainer>
    </MainDiv>
  );
}

export default SearchBar;

const MainDiv = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
`;

const InputContainer = styled.div`
  margin-top: 20px;
  background-color: #f5f5f5;
  height: 40px;
  width: 70%;
  display: flex;
  align-items: center;
  margin-left: 40px;
  border-radius: 10px;
`;

const TextField = styled.input`
  border: none;
  height: 20px;
  background: transparent;
`;

const FilterContainer = styled.div`
  display: flex;
  width: 20%;
  align-items: center;
  justify-content: space-around;
  margin-top: 15px;
`;
