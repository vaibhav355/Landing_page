import React from "react";
import { Card } from "@mui/material";
import styled from "styled-components";

const Container = styled.div``;
const CardContainer = styled(Card)``;
const FirstContainer = styled.div``;
const Letter = styled.span``;
const Tag = styled.span``;
const Line = styled.span``;
const SeocndContaier = styled.div``;
const Price = styled.span``;
const Para = styled.p``;
const ThirdContainer = styled.div``;
const CorrectLine = styled.span``;
const IncorrectLine = styled.span``;
const ButtonContainer = styled.div``;
const Button = styled.button``;




const PriceCard = () => {
  return (
    <Container>
      <CardContainer>
        <FirstContainer>
          <Letter>Basic</Letter>
          <Tag>BEST SCORE</Tag>
        </FirstContainer>

        <Line></Line>

        <SeocndContaier>
          <Price>15$</Price>
          <Para>Per Month</Para>
        </SeocndContaier>

        <ThirdContainer>
            <CorrectLine>Free updates</CorrectLine>
            <CorrectLine>Custom domain</CorrectLine>
            <CorrectLine>Outstanding support</CorrectLine>

            <IncorrectLine>Unlimited support</IncorrectLine>
            <IncorrectLine>Build responsive website</IncorrectLine>
        </ThirdContainer>

        <ButtonContainer>
            <Button>
                Getting started
            </Button>
        </ButtonContainer>
      </CardContainer>
    </Container>
  );
};

export default PriceCard;
