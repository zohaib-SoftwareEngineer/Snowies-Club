import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";
import "../../global.js";
export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? `#2871fb` : "transparent")};

  height: 120px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: absolute;
  width: 100%;
  top: 80px;
  background-color: #2871fb;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  //padding: 0 24px;
  max-width: 1350px;
`;

export const NavLogo = styled(LinkR)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  @media screen and (max-width: 960px) {
    width: 50%;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  text-transform: uppercase;
  align-items: center;
  list-style: none;
  justify-content: center;
  text-align: center;
  margin-bottom: 0px;
  font-size: 24px;
  font-weight: 700;
  margin-top: 5%;
  margin-left: 26px;
  font-family: "zinc" !important;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 20px;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-family: "honeybear";
  &.active {
    border-bottom: 3px solid #ffaa4c;
  }
  &:hover {
    color: white !important;
  }
`;

export const NavBtnLink = styled.a`
  border-radius: 50px;
  background: white;
  white-space: nowrap;
  padding: 10px 22px;
  color: black;
  font-size: 18px;
  font-family: Lato;
  outline: none;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: black;
  }
`;

export const LogoImg = styled.img`
  width: 200px;
  height: 73px;
`;

export const SoicalMedia = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-around;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 12%;
  margin-top: 2.5%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const SoicalMediaIcon = styled.a`
  color: #fff;
  font-size: 50px;
  cursor: pointer;
`;
