import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* m  argin-top:100px; */
  /* background: rgb(1, 6, 6); */
  background: linear-gradient(#3e51eb, #424ce9, #5430da);
  /* background: #3166f4; */
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
  width: 30%;
  @media screen and (max-width: 768px) {
    display: none;
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
  font-size: 40px;
  display: inline-flex;
  /* margin-top: 6%; */
  justify-content: center;
  width: 100%;
  color: white;
  font-family: "honeybear";
  line-height: 6.1;
  font-weight: 600;
  @media screen and (max-width: 480px) {
    font-size: 40px;
    justify-content: center;
    display: flex;
    width: 100%;
    line-height: 3.1;
    margin-top: 20px;
  }
`;
export const Bg = styled.div`
  /* text-align: center; */
  background-image: url("Roadmap Road.png");
  /* min-width: 100%; */
  /* min-height: 100%; */
  background-size: cover;
  /* height: 800px; */
  width: 80%;
  height: 2000px;
  margin-top: 5%;
`;
export const Heading1 = styled.h2`
  font-size: 24.2px;
  display: inline-flex;
  justify-content: center;
  width: 100%;
  color: white;
  font-family: "honeybear";
  line-height: 3.1;
  font-weight: 600;
  @media screen and (max-width: 480px) {
    font-size: 17px;
    justify-content: center;
    display: flex;
    text-transform: uppercase;
    text-align: center;
    width: 100%;
    margin-top: 20px;
  }
  @media screen and (max-width: 768px) {
    font-size: 17px;
    justify-content: center;
    display: flex;
    text-transform: uppercase;
    text-align: center;
    width: 100%;
    margin-top: 20px;
  }
`;
export const Subtitle = styled.p`
  font-size: 20px;
  text-align: center;
  line-height: 39px;
  font-family: "hello";
  text-transform: uppercase;
  color: white;
  @media screen and (max-width: 768px) {
    font-size: 15px;
    text-align: center;
  }
`;

export const LinkImg = styled.img`
  position: absolute;
  height: 100rem;
  margin-top: 8%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SubtitleSpan = styled.span`
  margin-bottom: 35px;
  font-size: 34px;
  text-align: center;
  line-height: 24px;
  font-family: "Bangers", cursive;
  // font-weight: bold;
  color: #ffef61;
  @media screen and (max-width: 768px) {
    font-size: 15px;
    text-align: center;
  }
`;

export const Subtitle1 = styled.p`
  font-size: 25.2px;
  line-height: 24px;
  font-family: "Bangers", cursive;
  color: #ffef61;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }
`;

export const ImgAdjustment = styled.div`
  justify-content: flex-start;
  display: flex;
`;

export const textRoad = styled.div`
  margin-top: 18px;
  @media screen and (max-width: 768px) {
    margin-top: 14px;
  }
`;

export const RoadMapOne = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    justify-content: center;
    /* width: 0px; */
  }
`;

export const RoadMapImgOne = styled.img`
  width: 70%;
  position: relative;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const RoadMapTwo = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 14%;
  width: 80%;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    justify-content: center;
  } ;
`;

export const RoadMapThree = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  margin-top: 12%;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const RoadMapFour = styled.div`
  margin-top: 12%;
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;
