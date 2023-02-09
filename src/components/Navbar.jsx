import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 12px;
`;
const Left = styled.div``;

const LogoImage = styled.img`
  height: 40px;
  width: 40px;
`;
const Center = styled.ul`
  display: flex;
  list-style: none;
  margin-left: 5%;
  margin-right: 20%;
  padding: 0;
`;
const MenuItem = styled.li`
  margin: 0 11px 0;
  cursor: pointer;
`;
const Right = styled.div``;
const Button = styled.button`
  padding: 11px 18px 7px;
  color: #6852ed;
  border: 1px solid #6852ed;
  border-radius: 40px;
  font-size: 14px;
  background-color: transparent;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Left>
        <LogoImage src="/images/Logo.png" />
      </Left>
      <Center>
        <MenuItem>Home</MenuItem>
        <MenuItem>Pages</MenuItem>
        <MenuItem>Services</MenuItem>
        <MenuItem>Portfolio</MenuItem>
        <MenuItem>Blog</MenuItem>
        <MenuItem>Contact</MenuItem>
      </Center>
      <Right>
        <Button>Login</Button>
      </Right>
    </Container>
  );
};

export default Navbar;
