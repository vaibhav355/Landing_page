import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";

const Container = styled.div`
  border: 2px solid red;
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
  border: 2px solid black;
`;
const Heading = styled.h1`
  margin: 0px;
  color: #554d89;
  font-size: 50px;
`;
const SubHeading = styled.span`
  color: #5b5766;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
`;
const ContactButton = styled.button`
  padding: 14px 23px 14px;
  background: linear-gradient(26.57deg, #6852ed 16.67%, #ba43fc 100%);
  border-radius: 40px;
  border: none;
  color: white;
  margin-right: 15px;
`;

const Link = styled.span`
  color: #554d89;
  cursor: pointer;
`;
const Right = styled.div``;
const ManImage = styled.img`
  position: absolute;
  z-index: 1;
  height: 642px;
  width: 653px;
`;
const ShapeImage = styled.img`
  height: 642px;
  width: 485px;
`;

const Home = () => {
  return (
    <Container>
      <Navbar />

      <Wrapper>
        <Left>
          <Heading>Realize your</Heading>
          <Heading>full potential</Heading>
          <SubHeading>We help our clients make relize</SubHeading>
          <SubHeading>their most important business goals.</SubHeading>

          <ButtonContainer>
            <ContactButton>Contact Us</ContactButton>
            <Link>Order similar</Link>
          </ButtonContainer>
        </Left>
        <Right>
          <ManImage src="/images/sitting_man.png" alt="sitting_man" />
          <ShapeImage src="/images/shape_1.png" alt="SHAPE" />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Home;
