import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const ImageContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  /* styling */

  position: absolute;
  z-index: 1;
  top: 1667px;
  right: 37%;
`;

const Image = styled.img`
  height: 300px;
  width: 100%;
`;

const PlayButton = styled.span``;
const Heading = styled.h2`
  margin: 0;
  font-weight: 700;
  font-size: 28px;
  color: #554d89;
`;
const ParaContainer = styled.div``;
const SmallPara = styled.p`
  text-align: center;
  margin: 0;
  font-weight: 400;
  font-size: 15px;
  color: #5b5766;
  /* border: 2px solid black; */
  max-width: 480px;
`;

const VideoPage = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src="/images/Background.png" alt="Background" />
      </ImageContainer>
      <Bottom>
        <PlayButton>play button</PlayButton>
        <Heading>How it works</Heading>
        <ParaContainer>
          <SmallPara>
            This app does everything you could want it to do it
          </SmallPara>
          <SmallPara>is beautifully and extremely intuitive to use.</SmallPara>
        </ParaContainer>
      </Bottom>
    </Container>
  );
};

export default VideoPage;
