import React from "react";
import styled, { css } from "styled-components";
import { BackArrow, Home, Middle, Notification, Settings } from "../../assets";

function NavHeader() {
  return (
    <MainDiv>
      <Container sides>
        <img src={BackArrow} alt="replace"></img>
        <img src={Home} alt="replace"></img>
      </Container>
      <Container
        middle
        onClick={() => {
          console.log("Clicked");
        }}
      >
        <img src={Middle} alt="replace"></img>
      </Container>
      <Container sides>
        <img src={Notification} alt="replace"></img>
        <img src={Settings} alt="replace"></img>
      </Container>
    </MainDiv>
  );
}

export default NavHeader;

const MainDiv = styled.div`
  background-color: #dfdfe0;
  display: flex;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  height: 50px;
`;

const Container = styled.div`
  height: 50px;
  ${(props) =>
    props.sides &&
    css`
      width: 25%;
      display: flex;
      align-items: center;
      justify-content: space-around;
    `};
  ${(props) =>
    props.middle &&
    css`
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    `};
`;
