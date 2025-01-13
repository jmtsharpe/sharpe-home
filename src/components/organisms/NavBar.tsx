import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Palette } from "../../fixtures/pallette";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  background-color: ${Palette.white};
  color: #ffffff;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${Palette.jet};
`;

const NavLinks = styled.ul<{ isOpen: boolean }>`
  list-style: none;
  display: flex;
  margin: 0;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    background-color: #2c3e50;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    padding: 0;
  }
`;

const NavLinkItem = styled.li`
  a {
    text-decoration: none;
    color: ${Palette.jet};
    font-size: 1rem;
    font-weight: 500;
    padding: 10px;

    &:hover {
      color: ${Palette.white};
      background: ${Palette.jet};
    }
    @media (max-width: 768px) {
      display: block;
      width: 100%;
      padding: 10px;
    }
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;

  div {
    width: 25px;
    height: 3px;
    background-color: #ecf0f1;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <NavbarContainer>
      <Logo>My Portfolio</Logo>
      <Hamburger onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </Hamburger>
      <NavLinks isOpen={isOpen} onClick={toggleMenu}>
        <NavLinkItem>
          <Link to="/">Home</Link>
        </NavLinkItem>
        <NavLinkItem>
          <Link to="/about">About Me</Link>
        </NavLinkItem>
        <NavLinkItem>
          <Link to="/weather">Weather</Link>
        </NavLinkItem>
        <NavLinkItem>
          <Link to="/blog">Blog</Link>
        </NavLinkItem>
        <NavLinkItem>
          <Link to="/contact">Contact</Link>
        </NavLinkItem>
      </NavLinks>
    </NavbarContainer>
  );
};

export { Navbar };
