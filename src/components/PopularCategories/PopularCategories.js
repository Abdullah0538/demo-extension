import React from "react";

import { ArrowUp, BlackArrow, DefiBox, Games, Market } from "../../assets";
import styled, { css } from "styled-components";

function PopularCategories() {
  return (
    <>
      <MainContainer>
        <Container background={"#EAEFFF"}>
          <img src={ArrowUp} style={{ height: 40, padding: 10 }} alt="replace"></img>
          <Text>
            Exchanges <img src={BlackArrow} />
          </Text>
        </Container>
        <Container after background={"#F5F5F5"}>
          <img src={Games} style={{ height: 40, padding: 10 }} alt="replace"></img>
          <Text>
            Games <img src={BlackArrow} />
          </Text>
        </Container>
      </MainContainer>
      <MainContainer after>
        <Container background={"#E2F9F3"}>
          <img src={Market} style={{ height: 40, padding: 10 }} alt="replace"></img>
          <Text>
            Marketplaces <img src={BlackArrow} />
          </Text>
        </Container>
        <Container after background={"#FFF3EC"}>
          <img src={DefiBox} style={{ height: 40, padding: 10 }} alt="replace"></img>
          <Text>
            DeFi <img src={BlackArrow} />
          </Text>
        </Container>
      </MainContainer>
    </>
  );
}

export default PopularCategories;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  height: 110px;
  ${(props) =>
    props.after &&
    css`
      margin-top: 10px;
    `};
`;

const Container = styled.div`
  height: 100%;
  border-radius: 10px;
  width: 50%;

  ${(props) =>
    props.after &&
    css`
      margin-left: 10px;
    `};

  ${(props) =>
    props.background &&
    css`
      background-color: ${props.background};
    `};
`;

const Text = styled.div`
  font-size: 17px;
  padding-left: 10px;
  padding-top: 15px;
  padding-right: 10px;
  display: flex;
  justify-content: space-between;
`;

const CustomIcon = styled.img``;
