import { Card } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
max-width: 1058px;
  margin: auto;
  display: flex;
  align-items: center;
`;
const Left = styled.div``;
// Style For Boxes
const CardContainer = styled(Card)`
   height: 142px;
  width: 253px;
  padding: 20px;
  margin-top: 30px;
  margin-left: 10px;

  /* special style */
  background: #ffffff;
  box-shadow: 0px 0px 20px #e1e4ed;
  border-radius: 10px !important;
`;

const Heading = styled.h3`
  color: #554d89;
  font-size: 22px;
`;

const Para = styled.p`
  color: #716c80;
  font-size: 15px;
`;

// Market Para ....

const MarketCard = styled(Card)`
  height: 142px;
  width: 253px;
  padding: 20px;
  /* margin: 10px; */
  margin-top: 30px;

  /* special style */
  background: linear-gradient(
    26.57deg,
    #6852ed 16.67%,
    #ba43fc 100%
  ) !important;
  box-shadow: 0px 0px 20px rgba(104, 82, 237, 0.8) !important;
  border-radius: 10px !important;
`;

const MarketHeading = styled.h3`
  color: white;
  font-size: 22px;
`;

const MarketPara = styled.p`
  color: white;
  font-size: 15px;
`;

const LinkReadMore = styled.span`
  color: white;
  font-size: 16px;
`;

// End ......
const Center = styled.div`
  margin-top: 25px;
`;

// style Right Contaier
const Right = styled.div`
  margin-left: 30px;
`;
const Header = styled.div``;
const SecondHeading = styled.h2`
  margin: 0;
  font-weight: 700;
  font-size: 34px;
  color: #554d89;
`;
const ParaContainer = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
`;
const SecondPara = styled.p`
  margin: 0;
  color: #716c80;
  font-size: 15px;
`;
const ButtonContainer = styled.div``;
const Button = styled.button`
  padding: 11px 35px 13px;
  font-size: 16px;
  background: linear-gradient(26.57deg, #6852ed 16.67%, #ba43fc 100%);
  border-radius: 40px;
  border: none;
  color: white;
  cursor: pointer;
`;

const ServicesMain = () => {
  return (
    <Container>
      <Left>
        <CardContainer raised={true}>
          <Heading>Corporate finance</Heading>
          <Para>Leverage agile frameworks to provide a robust synopsis</Para>
        </CardContainer>

        <MarketCard raised={true}>
          <MarketHeading>Market Analysis</MarketHeading>
          <MarketPara>
            Nibh vel velit auctor aliqunean sollicitudinlorem bibendum auci …
          </MarketPara>
          <LinkReadMore>Read More </LinkReadMore>
        </MarketCard>
      </Left>
      <Center>
        <CardContainer>
          <Heading>Audit & Evaluation</Heading>
          <Para>
            Bring to the table win-win survival strategies to ensure proactive
          </Para>
        </CardContainer>

        <CardContainer>
          <Heading>Sales & Trade</Heading>
          <Para>
            Bring to the table win-win survival strategies to ensure proactive
          </Para>
        </CardContainer>
      </Center>

      <Right>
        <Header>
          <SecondHeading>Get a solutions to</SecondHeading>
          <SecondHeading>your businesses</SecondHeading>
        </Header>
        <ParaContainer>
          <SecondPara>Our consultants help address your most</SecondPara>
          <SecondPara>challenging issues by providing strategic,</SecondPara>
          <SecondPara>financial, operational, and IT services.</SecondPara>
        </ParaContainer>
        <ButtonContainer>
          <Button>All services</Button>
        </ButtonContainer>
      </Right>
    </Container>
  );
};

export default ServicesMain;
