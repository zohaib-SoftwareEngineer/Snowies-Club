import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: linear-gradient(0.25turn, #4c1109, #a0410f, #4c1109); */
  background: #5a2ad6;
  /* background: #010606; */

  @media screen and (max-width: 768px) {
    height: 2000px;
    padding-top: 10px;
  }

  @media screen and (max-width: 480px) {
    height: 1800px;
    padding-top: 10px;
  }
`;

export const ServicesWrapper = styled.div`
  /* max-width: 1000px; */
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 10rem;
  padding: 0 50px;
  margin-top: 3%;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  /* background: #fff; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  width: 250px;
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2); */
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  height: 245px;
  width: 246px;
  margin-bottom: 10px;
  /* border-radius: 15px; */
`;

export const ServicesH1 = styled.h1`
  font-size: 50px;
  color: white;
  font-family: "honeybear";
  font-weight: bold;
  margin-bottom: 0px !important;
  @media screen and (max-width: 480px) {
    font-size: 4rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 25.4px;
  font-family: "honeybear";
  color: white;
  font-weight: bold;
  line-height: 4;
  margin-bottom: 0px !important;
  @media screen and (max-width: 768px) {
    font-size: 35.2px;
  }
`;

export const ServicesP = styled.p`
  font-size: 20.2px;
  width: 23rem;
  font-family: "hello";
  margin-top: -20px;
  text-align: center;
  color: white;
`;
