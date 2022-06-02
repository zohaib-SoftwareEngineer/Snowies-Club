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
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Welcomeimg = styled.img`
  width: 80%;
  margin-top: -45px;
  @media screen and (max-width: 768px) {
    width: 60% !important;
    display: none;
    //margin-top: -20px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;

  align-items: center;

  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: #040014;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 49.5px;
  color: #efeaa1;
  font-family: "Bangers", cursive;
  font-weight: bold;
  //margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const CardstyleFront = styled.div`
  background-color: #570909;
  height: 80px;
  width: 600px;
  color: #efeaa1;
  font-family: "Bangers", cursive;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35.4px;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    width: 400px;
  }
`;
export const CardstyleBack = styled.div`
  background-color: #570909;
  height: 80px;
  width: 600px;
  color: #efeaa1;
  font-family: "Bangers", cursive;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20.4px;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    width: 400px;
  }
`;
export const Heading = styled.h1`
  font-size: 47.2px;
  display: inline-flex;
  justify-content: center;
  width: 100%;
  color: #ffb600;
  font-family: "Bangers", cursive;
  line-height: 1.1;
  font-weight: 600;
  @media screen and (max-width: 480px) {
    font-size: 40px;
    justify-content: center;
    display: flex;
    width: 100%;
    margin-top: 20px;
  }
`;
export const Heading1 = styled.h2`
  font-size: 50.2px;
  display: inline-flex;
  justify-content: center;
  width: 100%;
  color: #ffc700;
  font-family: "Bangers", cursive;
  line-height: 1.1;
  font-weight: 600;
  @media screen and (max-width: 480px) {
    font-size: 40px;
    justify-content: center;
    display: flex;
    width: 100%;
    margin-top: 20px;
  }
`;
export const Subtitle = styled.p`
  margin-bottom: 35px;
  font-size: 33px;
  text-align: center;
  line-height: 24px;
  font-family: "Bangers", cursive;
  color: #ffef61;
  @media screen and (max-width: 768px) {
    font-size: 15px;
    text-align: center;
  }
`;
export const SubtitleSpan = styled.span`
  margin-bottom: 35px;
  font-size: 37px;
  text-align: center;
  line-height: 24px;
  font-family: "Bangers", cursive;
  color: #ffef61;
  @media screen and (max-width: 768px) {
    font-size: 22px;
    text-align: center;
  }
`;
export const SubtitleSpan2 = styled.span`
  margin-bottom: 35px;
  font-size: 37px;
  text-align: center;
  line-height: 24px;
  font-family: "Bangers", cursive;
  color: #ffef61;
  @media screen and (max-width: 768px) {
    font-size: 18px;
    text-align: center;
  }
`;

export const Subtitle1 = styled.p`
  font-size: 25.2px;
  line-height: 24px;
  font-family: "Bangers", cursive;
  color: #ffef61;
  @media screen and (max-width: 768px) {
    font-size: 30px;
    text-align: center;
  }
`;
export const textRoad = styled.div`
  margin-top: 18px;
  @media screen and (max-width: 768px) {
    margin-top: 14px;
  }
`;
export const ImgAdjustment = styled.div`
  justify-content: flex-end;
  display: flex;
  @media screen and (max-width: 768px) {
    justify-content: flex-start;
  }
`;
