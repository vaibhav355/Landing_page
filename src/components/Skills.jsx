import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1058px;
  margin: auto;
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  align-items: center;
`;
const Left = styled.div`
  margin-right: 30px;
`;
const Header = styled.div``;
const Title = styled.h3`
  margin: 0;
  padding: 0;
  color: #554d89;
  font-size: 28px;
`;

const ParaContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`;
const Para = styled.p`
  margin: 0;
  color: #716c80;
  font-size: 14px;
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
const Right = styled.div``;
const Image = styled.img`
  height: 200px;
  width: 450px;
`;

const Skills = () => {
  return (
    <Container>
      <Left>
        <Header>
          <Title>Our skills & expertise</Title>
        </Header>

        <ParaContainer>
          <Para>
            We help company set up business strategy including design brand
          </Para>
          <Para>
            identiy or product design service. So company can focus on their
          </Para>
          <Para>core business.Morbi accumsan ipsum velit. Nam nec tellus.</Para>
        </ParaContainer>

        <ButtonContainer>
          <Button>We are in the press</Button>
        </ButtonContainer>
      </Left>
      <Right>
        <Image src="/images/Skill_bar.png" alt="" />
      </Right>
    </Container>
  );
};

export default Skills;
