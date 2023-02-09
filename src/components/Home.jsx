import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";

// import Components
import Services from "./Services";

import SplitSection from "./SplitSection";
import ServicesMain from "./ServicesMain";
import Skills from "./Skills";


const Container = styled.div`
  /* border: 2px solid red; */
  max-width: 1058px;
  margin: auto;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  /* border: 2px solid black; */
`;
const Heading = styled.h1`
  margin: 0px;
  color: #554d89;
  font-size: 40px;
`;

const ParaContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;
const Para = styled.p`
  margin: 0;
  color: #5b5766;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;

`;
const ContactButton = styled.button`
  padding: 9px 22px 9px;
  background: linear-gradient(26.57deg, #6852ed 16.67%, #ba43fc 100%);
  border-radius: 40px;
  border: none;
  color: white;
  margin-right: 15px;
  cursor: pointer;
`;

const Link = styled.span`
  color: #554d89;
  cursor: pointer;
`;
const Right = styled.div``;
const ManImage = styled.img`
  height: 642px;
  width: 653px;
`;


const Home = () => {
  return (
    <Container>
      <Navbar />

      <Wrapper>
        <Left>
          <Heading>Realize your</Heading>
          <Heading>full potential</Heading>
          <ParaContainer>
          <Para>We help our clients make relize</Para>
          <Para>their most important business goals.</Para>
          </ParaContainer>

          <ButtonContainer>
            <ContactButton>Contact Us</ContactButton>
            <Link>Order similar</Link>
          </ButtonContainer>
        </Left>
        <Right>
          <ManImage src="/images/ManImage.png" alt="sitting_man" />
        </Right>
      </Wrapper>

      <Services />
      {/* <SplitSection />
      <ServicesMain /> */}
      {/* <Skills /> */}
    </Container>
  );
};

export default Home;
