import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* m  argin-top:100px; */
  /* background: rgb(1, 6, 6); */
  /* background: linear-gradient(0.25turn, #4c1109, #a0410f, #4c1109); */
  background: #5d27d5;
  @media screen and (max-width: 768px) {
    height: 500px;
    padding-top: 40px;
  }

  @media screen and (max-width: 480px) {
    height: 500px;
    padding-top: 40px;
  }
`;

export const ServicesWrapper = styled.div`
  /* flex-direction: row; */
  display: flex;
  justify-content: flex-start;
  width: 80%;
  @media screen and (max-width: 1000px) {
    width: 90%;
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const footerStyle = styled.div``;

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
  font-size: 25px;
  color: white;
  font-family: "honeybear";
  font-weight: bold;
  margin-bottom: 0px !important;
  @media screen and (max-width: 480px) {
    font-size: 20px;
    text-align: center;
  }
`;

export const Heading1 = styled.h1`
  font-size: 60px;
  color: white;
  font-family: "honeybear";
  font-weight: bold;
  margin-bottom: 0px !important;
  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;
export const Heading2 = styled.a`
  font-size: 25px;
  color: white;
  font-family: "honeybear";
  font-weight: bold;
  margin-bottom: 0px !important;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin: 10px;
    text-align: center;
  }
`;

export const HeadingDiv = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    margin-top: 10%;
  }
`;

export const Heading1Div = styled.div`
  flex-direction: row;
  width: 35%;
  justify-content: space-around;
  display: flex;
  margin-top: 1.5%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 6%;
  }
`;
