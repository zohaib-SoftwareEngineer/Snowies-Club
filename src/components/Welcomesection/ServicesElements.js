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
  background: linear-gradient(to right, #2f68f7, #2e69f5);
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
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const DirectionFlex = styled.div`
  flex-direction: row;
  text-align: center;
`;
export const Heading = styled.h1`
  /* margin-bottom: 24px; */
  text-align: center;
  font-size: 50px;
  margin-top: 7%;
  display: inline-flex;
  color: white;
  font-family: "honeybear";
  line-height: 2.1;

  @media screen and (max-width: 480px) {
    font-size: 30px;
    justify-content: center;
    display: flex;
    width: 100%;
    margin-bottom: 0px !important;
    margin-top: 20px;
  }
`;
export const Heading1 = styled.span`
  margin-bottom: 24px;
  font-size: 64px;
  color: #e4a300;
  font-family: "Bangers", cursive;
  line-height: 1.1;
  font-weight: 600;
  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;
export const Subtitle = styled.p`
  margin-bottom: 35px;
  font-size: 34px;
  line-height: 24px;
  font-family: "hellochristmas";
  color: white;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    text-align: center;
    margin-right: 10px;
    margin-left: 10px;
  }
`;

export const SubtitleSpan = styled.span`
  margin-bottom: 35px;
  font-size: 34px;
  line-height: 24px;
  font-family: "Bangers", cursive;
  color: #00bec6;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    text-align: center;
    margin-right: 10px;
    margin-left: 10px;
  }
`;

export const Subtitle1 = styled.p`
  font-size: 34px;
  line-height: 24px;
  font-family: "Bangers", cursive;
  color: #e4a300;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    text-align: center;
    margin-right: 10px;
    margin-left: 10px;
  }
`;
export const MintingButton = styled.img`
  width: 41%;
  height: 50px;
  margin-top: 8%;
`;
export const Input2 = styled.input`
  height: 40px;
  width: 80%;
  border: 4px solid #4f9dff;
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  &.focus-visible {
    outline: none;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
export const Subtitle1Span = styled.span`
  font-size: 34px;
  line-height: 24px;
  font-family: "Bangers", cursive;
  color: #e4a300;
  @media screen and (max-width: 768px) {
    font-size: 30px;
    text-align: center;
    margin-right: 10px;
    margin-left: 10px;
  }
`;
export const addMargin = styled.div`
  margin-top: 16px;
  @media screen and (max-width: 768px) {
    margin-top: 13px;
  }
`;
export const Welcomeimg = styled.img`
  width: 35%;
  @media screen and (max-width: 768px) {
    width: 60%;
  }
`;
