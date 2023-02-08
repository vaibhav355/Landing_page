import React from "react";
import styled from "styled-components";
// import Logo from "./Logo.png";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const Left = styled.div`
  /* flex: 1;
  display: flex;
  align-items: center; */
`;
const Center = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  text-align: center;
`;
const MenuItem = styled.li`
  margin: 11px;
  cursor: pointer;
`;
const Right = styled.div`
  /* display: flex; */
  /* justify-content: flex-end; */
`;
const Button = styled.button`
  padding: 11px 18px 7px;
  margin-top: 22px;
  color: #6852ed;
  border: 1px solid #6852ed;
  border-radius: 40px;
  font-size: 14px;
  background-color: transparent;
  cursor: pointer;
  /* justify-content: flex-end; */
`;

const Navbar = () => {
  return (
    <Container>
      <Left>Image</Left>
      <Center>
        <MenuItem><stong>Home</stong></MenuItem>
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
