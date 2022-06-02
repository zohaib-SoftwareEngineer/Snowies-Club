import styled from "styled-components";

export const ServicesContainer = styled.div`
  /* border-top: solid black 6px; */
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* m  argin-top:100px; */
  /* background: rgb(1, 6, 6); */
  /* background: linear-gradient(0.25turn, #4c1109, #a0410f, #4c1109); */
  background: #3166f4;
  @media screen and (max-width: 768px) {
    height: auto;
  }

  @media screen and (max-width: 480px) {
    height: auto;
  }
`;

export const Welcome = styled.div`
  justify-content: center;
  align-items: center;
  width: 88%;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const DirectionFlex = styled.div`
  flex-direction: row;
`;
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 40px;
  display: inline-flex;
  color: white;
  justify-content: center;
  display: flex;
  font-family: "honeybear";
  margin-top: 6%;
  line-height: 1.1;

  @media screen and (max-width: 768px) {
    font-size: 28px;
    justify-content: center;
    display: flex;
    width: 100%;
    text-align: center;
    line-height: 1.5;
    margin-top: 20px;
  }
`;
export const Heading1 = styled.h1`
  margin-bottom: 24px;
  font-size: 64px;
  color: #e4a300;
  font-family: "Bangers", cursive;
  line-height: 1.1;
  font-weight: 600;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const Subtitle = styled.p`
  margin-bottom: 35px;
  font-size: 22px;
  text-align: center;
  line-height: 28px;
  text-transform: uppercase;
  font-family: "hello";
  color: white;
  @media screen and (max-width: 768px) {
    font-size: 17px;
    text-align: center;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 16px;
  }
`;

export const SubtitleSpan = styled.span`
  margin-bottom: 35px;
  font-size: 30px;
  text-align: center;
  line-height: 24px;
  font-family: "Bangers", cursive;
  color: #17112c;
  @media screen and (max-width: 768px) {
    font-size: 17px;
    text-align: center;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const Subtitle1 = styled.p`
  font-size: 30px;
  line-height: 24px;
  text-align: center;
  font-family: "Bangers", cursive;
  color: #17112c;
  @media screen and (max-width: 768px) {
    font-size: 17px;
    text-align: center;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const Subtitle1Span = styled.span`
  font-size: 30px;
  line-height: 24px;
  text-align: center;
  font-family: "Bangers", cursive;
  color: #17112c;
  @media screen and (max-width: 768px) {
    font-size: 17px;
    text-align: center;
    margin-left: 10px;
    margin-right: 10px;
  }
`;
export const Welcomeimg = styled.img`
  width: 95%;
  @media screen and (max-width: 768px) {
    width: 60%;
    display: none;
  }
`;

export const Welcomeimg1 = styled.img`
  width: 27%;
  display: none;
  @media screen and (max-width: 768px) {
    width: 60%;
    display: block;
  }
`;

export const marginAdd = styled.div`
  margin-top: 16px;
  @media screen and (max-width: 768px) {
    margin-top: 13px;
  }
`;
export const ImgDiv = styled.div`
  width: 37%;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 0;
  }
`;
