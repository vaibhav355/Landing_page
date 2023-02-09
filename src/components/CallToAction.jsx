import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const ImageContainer = styled.div``;
const Image = styled.img`
  width: 100%;
  height: 50%;
`;

const SecondContainer = styled.div``;
const Desc = styled.div`
  display: flex;
  align-items: center;

  /* position and z-index */
  position: absolute;
  z-index: 1;

  top: 3432px;
  left: 389px;
`;
const Para = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 19px;
  color: #554d89;
`;
const Button = styled.button`
  margin-left: 200px;
  padding: 8px 23px 8px;
  font-size: 13px;
  border-radius: 40px;
  border-color: #6852ed;
  color: #6852ed;
  background-color: transparent;
  cursor: pointer;
`;

const CallToAction = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src="/images/Bg.png" alt="Bg" />
      </ImageContainer>
      <SecondContainer>
        <Desc>
          <Para>
            Build your successful business with us. Want to know how to do this?
          </Para>
          <Button>Contact us</Button>
        </Desc>
      </SecondContainer>
    </Container>
  );
};

export default CallToAction;
