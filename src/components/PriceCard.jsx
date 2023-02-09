import React from "react";
import { Card } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  max-width: 1058px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CardContainer = styled(Card)`
  margin: 20px;
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  height: 500px;
  width: 310px;
  border-radius: 8px;
`;
const FirstContainer = styled.div`
  margin-left: 40px;
  margin-top: 40px;

  display: flex;
  align-items: center;
`;
const Letter = styled.span`
  color: #554d89;
  font-weight: bold;
  font-size: 20px;
`;
const Tag = styled.span`
  padding: 5px 7px 5px;
  margin-left: 110px;
  color: #ef7171;
  font-weight: 700;
  font-size: 10px;
  background: rgba(225, 228, 237, 0.6);
  border-radius: 13px;
`;
const Line = styled.span`
  margin-top: 10px;
  background: #ba43fc;
  border-radius: 2px;
  margin-left: 40px;
  padding: 1px;
  width: 40px;
`;
const SeocndContaier = styled.div`
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* align-items: center; */
`;
const Price = styled.span`
  font-weight: 700;
  font-size: 50px;
  color: #554d89;
`;
const Para = styled.span`
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  mix-blend-mode: normal;
  opacity: 0.8;

  color: #5b5766;
`;
const ThirdContainer = styled.div`
  margin-left: 40px;
`;
const CorrectContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;
const CorrectImage = styled.img`
  margin-right: 5px;
`;
const CorrectLine = styled.span`
  color: #716c80;
  font-weight: 400;
  font-size: 16px;
`;
const InCorrectContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;
const CrossImage = styled.img`
  margin-right: 8px;
`;
const IncorrectLine = styled.span`
  color: #716c80;
  mix-blend-mode: normal;
  opacity: 0.8;
  font-weight: 400;
  font-size: 16px;
`;
const ButtonContainer = styled.div`
  margin-left: 40px;
  margin-top: 77px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 15px;
`;
const Button = styled.button`
  padding: 10px 23px 10px;
  background: linear-gradient(26.57deg, #6852ed 16.67%, #ba43fc 100%);
  border-radius: 40px;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
`;

const PriceCard = () => {
  return (
    <Container>
      {/* First */}
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
          <CorrectContainer>
            <CorrectImage src="/images/check.png" alt="check" />
            <CorrectLine>Free updates</CorrectLine>
          </CorrectContainer>

          <CorrectContainer>
            <CorrectImage src="/images/check.png" alt="check" />
            <CorrectLine>Custom domain</CorrectLine>
          </CorrectContainer>

          <CorrectContainer>
            <CorrectImage src="/images/check.png" alt="check" />
            <CorrectLine>Outstanding support</CorrectLine>
          </CorrectContainer>

          <InCorrectContainer>
            <CrossImage src="/images/cross.png" alt="cross" />
            <IncorrectLine>Unlimited support</IncorrectLine>
          </InCorrectContainer>

          <InCorrectContainer>
            <CrossImage src="/images/cross.png" alt="cross" />
            <IncorrectLine>Build responsive website</IncorrectLine>
          </InCorrectContainer>
        </ThirdContainer>

        <ButtonContainer>
          <Button>Getting started</Button>
        </ButtonContainer>
      </CardContainer>

      {/* SECOND */}

      <CardContainer>
        <FirstContainer>
          <Letter>Standard</Letter>
        </FirstContainer>

        <Line></Line>

        <SeocndContaier>
          <Price>37$</Price>
          <Para>Per Month</Para>
        </SeocndContaier>

        <ThirdContainer>
          <CorrectContainer>
            <CorrectImage src="/images/check.png" alt="check" />
            <CorrectLine>Free updates</CorrectLine>
          </CorrectContainer>

          <CorrectContainer>
            <CorrectImage src="/images/check.png" alt="check" />
            <CorrectLine>Custom domain</CorrectLine>
          </CorrectContainer>

          <CorrectContainer>
            <CorrectImage src="/images/check.png" alt="check" />
            <CorrectLine>Outstanding support</CorrectLine>
          </CorrectContainer>

          <CorrectContainer>
            <CorrectImage src="/images/check.png" alt="check" />
            <CorrectLine>Unlimited support</CorrectLine>
          </CorrectContainer>

          <InCorrectContainer>
            <CrossImage src="/images/cross.png" alt="cross" />
            <IncorrectLine>Build responsive website</IncorrectLine>
          </InCorrectContainer>
        </ThirdContainer>

        <ButtonContainer>
          <Button>Getting started</Button>
        </ButtonContainer>
      </CardContainer>

      {/* Third */}

      <CardContainer>
        <FirstContainer>
          <Letter>Advance</Letter>
        </FirstContainer>

        <Line></Line>

        <SeocndContaier>
          <Price>42$</Price>
          <Para>Per Month</Para>
        </SeocndContaier>

        <ThirdContainer>
          <CorrectContainer>
            <CorrectImage src="/images/check.png" alt="check" />
            <CorrectLine>Free updates</CorrectLine>
          </CorrectContainer>

          <CorrectContainer>
            <CorrectImage src="/images/check.png" alt="check" />
            <CorrectLine>Custom domain</CorrectLine>
          </CorrectContainer>

          <CorrectContainer>
            <CorrectImage src="/images/check.png" alt="check" />
            <CorrectLine>Outstanding support</CorrectLine>
          </CorrectContainer>

          <CorrectContainer>
            <CorrectImage src="/images/check.png" alt="cross" />
            <CorrectLine>Unlimited support</CorrectLine>
          </CorrectContainer>

          <CorrectContainer>
            <CorrectImage src="/images/check.png" alt="cross" />
            <CorrectLine>Build responsive website</CorrectLine>
          </CorrectContainer>
        </ThirdContainer>

        <ButtonContainer>
          <Button>Getting started</Button>
        </ButtonContainer>
      </CardContainer>
    </Container>
  );
};

export default PriceCard;
