import { Card } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 50px;
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;
const BoxCard = styled(Card)`
  width: 300px;
  height: 150px;
  padding: 20px;
  margin: 10px;

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

// Style Only for market box

const MarketCard = styled(Card)`
  width: 300px;
  height: 150px;
  padding: 20px;
  margin: 10px;

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

// Split Section Starts Here ...

const SecondContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Left = styled.div``;
const Image = styled.img`
  width: 500px;
  height: 500px;
`;
const Right = styled.div``;
const Header = styled.div``;

const Title = styled.h4`
  margin: 0;
  padding: 0;
  color: #554d89;
  font-size: 28px;
`;
const Paragraph = styled.div`
  width: 100%;
  margin-top: 30px;
`;
const SecondPara = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
  color: #716c80;
`;
const ButtonContainer = styled.div`
  margin-top: 30px;
`;
const BoxButton = styled.button`
  padding: 11px 23px 14px;
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

const Services = () => {
  return (
    <Container>
      <CardContainer>
        <BoxCard raised={true}>
          <Heading>Corporate finance</Heading>
          <Para>Leverage agile frameworks to provide a robust synopsis</Para>
        </BoxCard>
        <BoxCard raised={true}>
          <Heading>Audit & Evaluation</Heading>
          <Para>
            Bring to the table win-win survival strategies to ensure proactive
          </Para>
        </BoxCard>
        <MarketCard raised={true}>
          <MarketHeading>Market Analysis</MarketHeading>
          <MarketPara>
            Nibh vel velit auctor aliqunean sollicitudinlorem bibendum auci …
          </MarketPara>
          <LinkReadMore>Read More </LinkReadMore>
        </MarketCard>
      </CardContainer>

      {/* Split Screen Container Starts From Here */}

      <SecondContainer>
        <Left>
          <Image src="/images/Sitting_Girl.png" alt="Sitting_Girl" />
        </Left>
        <Right>
          <Header>
            <Title>Get the ultimate tool and</Title>
            <Title>learn how to grow your</Title>
            <Title>audience</Title>
          </Header>

          <Paragraph>
            <SecondPara>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
            </SecondPara>
            <SecondPara>
              blanditiis praesentium voluptatum deleniti atque. Many desktop
            </SecondPara>
            <SecondPara>publishing packages and web.</SecondPara>
          </Paragraph>
          <ButtonContainer>
            <BoxButton>Get started</BoxButton>
            <ReadLink href="/">Read More - </ReadLink>
          </ButtonContainer>
        </Right>
      </SecondContainer>
    </Container>
  );
};

export default Services;
