import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  /* background: #0c0c0c; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 870px;
  position: relative;
`;
export const bannerHeader1 = styled.div`
  width: 100%;

  justify-content: center;
  align-items: center;
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
  }
`;
export const bannerHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;
export const Bg = styled.div`
  text-align: center;
  background-image: url("Banner.png");
  min-width: 100%;
  min-height: 100%;
  background-size: cover;
  height: 800px;
  background-position: center;
  @media screen and (max-width: 768px) {
    height: 400px;
  }
`;

export const Heading = styled.h1`
  font-size: 80px;
  color: white;
  font-weight: bold;
  font-family: "honeybear";
  @media screen and (max-width: 768px) {
    font-size: 30px;
    /* text-align: center;
    margin-top: 28%; */
  }
`;

export const Logoimg = styled.img`
  width: 5%;
  margin-top: 13%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavBtnLink = styled.a`
  width: 62%;
  border-radius: 50px;
  background: rgba(0, 0, 0, 1);
  white-space: nowrap;
  padding: 10px 22px;
  color: white;
  font-size: 28px;
  outline: none;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: black;
  }
  @media screen and (max-width: 768px) {
    font-size: 19px;
    width: 100%;
  }
`;

// export const NavBtn = styled.nav`
//   display: flex;
//   align-items: center;

//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

// export const NavBtnLink = styled.button`
//   border-radius: 50px;
//   background: white;
//   white-space: nowrap;
//   width: 70%;
//   height: 12vh;
//   padding: 10px 22px;
//   color: black;
//   font-size: 27px;
//   outline: none;
//   border: none;
//   cursor: pointer;

//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: #fff;
//     //color: #010606;
//   }
// `;
export const HeadingDiv = styled.div`
  display: block;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 22rem;
  }
`;
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15vh;
  @media screen and (max-width: 768px) {
    height: 10vh;
  }
`;

export const VideoBg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("bg.jpeg");
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
