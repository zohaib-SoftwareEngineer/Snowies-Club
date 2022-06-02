import styled from "styled-components";

export const ServicesContainer = styled.div`
  border-top: solid black 6px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  /* m  argin-top:100px; */
  /* background: rgb(1, 6, 6); */
  /* background: linear-gradient(0.25turn, #4c1109, #a0410f, #4c1109); */
  background: #040014;
  @media screen and (max-width: 768px) {
    height: auto;
  }

  @media screen and (max-width: 480px) {
    height: auto;
  }
`;

export const Faqsdiv = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin-top: 30px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Faqimg = styled.img`
  width: 35%;
  @media screen and (max-width: 786px) {
    width: 80%;
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
  font-size: 90.5px;
  color: #efeaa1;
  font-family: "Bangers", cursive;
  font-weight: bold;
  text-shadow: 6px 3px #795f04;
  margin-bottom: 0px !important;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    display: none;
  }
`;

export const ServicesH2 = styled.h1`
  font-size: 90.5px;
  color: #efeaa1;
  font-family: "Bangers", cursive;
  font-weight: bold;
  text-shadow: 6px 3px #795f04;
  margin-bottom: 0px !important;
  display: none;
  @media screen and (max-width: 480px) {
    font-size: 4rem;
    display: block;
  }
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const CardstyleFront = styled.div`
  background-color: #570909;
  height: 80px;
  width: 700px;
  color: #efeaa1;
  font-family: "Bangers", cursive;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 42.4px;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    width: 400px;
    font-size: 20px;
  }

  @media screen and (max-width: 320px) {
    width: 300px;
  }
`;
export const Faqstyle = styled.div`
  //background-color: #570909;
  height: 80px;
  width: 700px;
  color: #efeaa1;
  font-family: "Bangers", cursive;
  border-bottom: 0px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 42.4px !important;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    width: 400px;
    font-size: 20px;
  }

  @media screen and (max-width: 320px) {
    width: 300px;
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
  font-size: 21.4px;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    width: 400px;
    font-size: 16px;
  }
  @media screen and (max-width: 320px) {
    width: 300px;
  }
`;
