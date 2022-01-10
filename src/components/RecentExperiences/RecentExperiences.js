import React from 'react'

import { Defi, BlackArrow, PenLogo } from "../../assets/";
import styled, { css } from "styled-components";

function RecentExperiences() {
    return (
        <>
        <Container>
          <Logo src={Defi} />
          <Content>
            <Heading>DeFi Swap</Heading>
            <Text color={"#6F6E73"}>Swap your digital assets</Text>
            <Text color={"#587BE0"}>+200 users</Text>
          </Content>
          <IconContainer>
            <img src={BlackArrow} style={{height:30}} alt="replace"/>
          </IconContainer>
        </Container>
        <Container after>
          <Logo src={PenLogo} />
          <Content>
            <Heading>Docu Sign</Heading>
            <Text color={"#6F6E73"}>sign smart contracts seamlessly</Text>
            <Text color={"#587BE0"}>+1k users</Text>
          </Content>
          <IconContainer>
            <img src={BlackArrow} style={{height:30}} alt="replace"/>
          </IconContainer>
        </Container>
        </>
    )
}

export default RecentExperiences

const Logo = styled.img`
  border-radius: 10px;
  height: 90.83px;
`;

const Container = styled.div`
  display: flex;
  ${(props) =>
    props.after &&
    css`
      margin-top: 10px;
    `};
`;

const Content = styled.div`
    padding:10px;
    width: 80%;
`;

const IconContainer = styled.div`
   width:20%;
   display:flex;
   justify-content:center;
   align-item:center;
   flex-direction:column;
`;


const Heading = styled.div`
    font-weight:500;
    font-size:17px;
`;

const Text = styled.div`
    font-size:13px;
    padding-top:7px;
    ${(props) =>
      props.color &&
      css`
        color:${props.color}
      `};
`
