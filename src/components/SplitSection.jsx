import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1058px;
  margin: auto;
`;

// Split Section Starts Here ...

const SecondContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Left = styled.div``;
const Image = styled.img`
  width: 500px;
  height: 590px;
`;
const Right = styled.div`
  margin-right: 20px;
`;
const Header = styled.div``;

const Title = styled.h3`
  margin: 0;
  padding: 0;
  color: #554d89;
  font-size: 28px;
`;

const Paragraph = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`;
const SecondPara = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
  color: #716c80;
`;
const Footer = styled.div``;
const BoxButton = styled.button`
  padding: 14px 23px 14px;
  background: linear-gradient(26.57deg, #6852ed 16.67%, #ba43fc 100%);
  border-radius: 40px;
  border: none;
  color: white;
  margin-right: 15px;
  cursor: pointer;
  font-size: 16px;
`;
const ReadLink = styled.a`
  text-decoration: none;
  color: #554d89;
`;

const SplitSection = () => {
  return (
    <Container>
      <SecondContainer>
        <Right>
          <Header>
            <Title>We offer a full range of digital</Title>
            <Title>marketing services</Title>
          </Header>

          <Paragraph>
            <SecondPara>
              Latin words, combined with a handful of model sentence
            </SecondPara>
            <SecondPara>
              structures, to generate Lorem Ipsum which looks reasonable.
            </SecondPara>
            <SecondPara>
              The generated Lorem Ipsum is therefore always free.
            </SecondPara>
          </Paragraph>
          <Footer>
            <BoxButton>View prices</BoxButton>
            <ReadLink href="/">More Info - </ReadLink>
          </Footer>
        </Right>
        <Left>
          <Image src="/images/SCR.png" alt="Sitting_Girl" />
        </Left>
      </SecondContainer>
    </Container>
  );
};

export default SplitSection;
