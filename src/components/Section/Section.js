import React from "react";
import styled from "styled-components";
import {Right} from "../../assets/"

function Section({ title,seeAll,children }) {
  return (
    <MainDiv>
      <Container>
        <Head>
          <Heading>{title}</Heading>
          { seeAll ?
          <Anchor>See All<img src={Right} style={{marginLeft:20}} alt="replace"></img></Anchor> : null }
        </Head>
        <MainBody>
            {children}
        </MainBody>
      </Container>
    </MainDiv>
  );
}

export default Section;

const MainDiv = styled.div`
  margin-top: 20px;
  height: 270px;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
    width:90%;
`;

const Head = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`;

const MainBody = styled.div`
    height:auto;
`

const Anchor = styled.a`
    color:#885FFF;
`

const Heading = styled.h2`
    font-weight: 400;
`;