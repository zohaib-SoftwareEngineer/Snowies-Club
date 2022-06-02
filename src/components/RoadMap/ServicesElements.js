import styled from "styled-components";

export const ServicesContainer = styled.div`
  /* border-top: solid black 6px; */
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: rgb(1, 6, 6); */
  /* background: linear-gradient(0.25turn, #4c1109, #a0410f, #4c1109); */
  background: #2e0039;
  @media screen and (max-width: 768px) {
    height: 2500px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
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
  background: #fff;
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
  font-size: 2.5rem;
  color: white;
  justify-content: center;
  align-items: center;
  width: 100%;
  display: flex;
  /* margin-bottom: 64px; */
  font-weight: bold;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const RoadMapSec = styled.div`
  padding-top: 195px;
  //padding-bottom: 280px;
  padding-right: 5%;
  padding-left: 5%;
  @media screen and (max-width: 767px) {
    padding-top: 80px;
    padding-bottom: 230px;
    border-radius: 30px;
  }
`;
export const Boxroad = styled.div`
  max-width: 892px;
  margin-top: 18px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 39px;
  padding-bottom: 22px;
  @media screen and (max-width: 767px) {
    margin-top: 0px;
    padding-top: 50px;
    padding-bottom: 0px;
  }
`;
export const MainContainter = styled.div`
  width: 100%;
  max-width: 752px;
  margin-right: auto;
  margin-left: auto;
`;
export const RoadMapBox = styled.div`
  position: relative;
  display: grid;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  grid-auto-columns: 1fr;
  grid-column-gap: 50px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;
  @media screen and (max-width: 767px) {
    display: flex;
    grid-template-columns: 1fr;
  }
`;
export const RoadLeft = styled.div`
  display: flex;
  margin-bottom: 40px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: start;
  align-items: flex-start;
  color: white;
  font-size: 20px;
  font-weight: 600;
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }
`;
export const RoadLeftID = styled.div`
  grid-column-end: 2;
  grid-column-start: 1;
  grid-row-end: 4;
  grid-row-start: 3;
  display: flex;
  margin-bottom: 150px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: start;
  align-items: flex-start;
  color: white;
  font-size: 20px;
  font-weight: 600;

  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }
`;
export const RoadLeftID1 = styled.div`
  grid-column-end: 2;
  grid-column-start: 1;
  grid-row-end: 5;
  grid-row-start: 6;
  display: flex;
  margin-bottom: 150px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: start;
  align-items: flex-start;
  color: white;
  font-size: 20px;
  font-weight: 600;
`;
export const RoadRightID = styled.div`
  -webkit-box-align: start;
  align-items: flex-start;
  display: flex;
  margin-bottom: 150px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  color: white;
  font-size: 20px;
  font-weight: 600;
  grid-column-end: 3;
  grid-column-start: 2;
  grid-row-end: 5;
  grid-row-start: 4;
  @media screen and (max-width: 767px) {
    grid-column-start: 1;
    grid-column-end: 2;
  }
`;
export const RoadRightID1 = styled.div`
  -webkit-box-align: start;
  align-items: flex-start;
  display: flex;
  margin-bottom: 40px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  color: #f4c44f;
  font-size: 20px;
  font-weight: 600;
  grid-column-end: 3;
  grid-column-start: 2;
  grid-row-end: 6;
  grid-row-start: 7;
  @media screen and (max-width: 767px) {
    grid-column-start: 1;
    grid-column-end: 2;
  }
`;
export const RoadRight = styled.div`
  display: flex;
  margin-bottom: 150px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  color: white;
  font-size: 20px;
  font-weight: 600;
  align-items: flex-start;
  -webkit-box-align: start;
  grid-column-end: 3;
  grid-column-start: 2;
  grid-row-end: 3;
  grid-row-start: 2;
  @media screen and (max-width: 767px) {
    grid-column-start: 1;
    grid-column-end: 2;
  }
`;
export const RoadmapRightimg = styled.div`
  display: flex;
  margin-bottom: 20px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  color: #f4c44f;
  font-size: 20px;
  font-weight: 600;
  align-items: flex-start;
  -webkit-box-align: start;
  grid-column-end: 2;
  grid-column-start: 2;
  grid-row-end: 1;
  grid-row-start: 2;
  @media screen and (max-width: 767px) {
    grid-column-start: 1;
    grid-column-end: 2;
  }
`;

export const RoadmapLeftimg = styled.div`
  grid-column-end: 2;
  grid-column-start: 1;
  grid-row-end: 3;
  grid-row-start: 2;
  display: flex;
  margin-bottom: 40px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: start;
  align-items: flex-start;
  color: #f4c44f;
  font-size: 20px;
  font-weight: 600;

  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }
`;

export const RoadmapRightIDimg = styled.div`
  -webkit-box-align: start;
  align-items: flex-start;
  display: flex;
  margin-bottom: 40px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  color: #f4c44f;
  font-size: 20px;
  font-weight: 600;
  grid-column-end: 3;
  grid-column-start: 2;
  grid-row-end: 4;
  grid-row-start: 3;
  @media screen and (max-width: 767px) {
    grid-column-start: 1;
    grid-column-end: 2;
  }
`;

export const RoadmapLeftIDimg = styled.div`
  grid-column-end: 2;
  grid-column-start: 1;
  grid-row-end: 4;
  grid-row-start: 5;
  display: flex;
  margin-bottom: 40px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: start;
  align-items: flex-start;
  color: #f4c44f;
  font-size: 20px;
  font-weight: 600;
`;

export const RoadHeading = styled.h3`
  margin-bottom: 20px;
  padding: 3px 20px;
  -webkit-box-flex: 0;
  flex: 0 0 auto;
  border-style: solid;
  border-width: 1px;
  border-color: #f4c44f;
  border-radius: 20px;
  text-align: justify;
  font-family: Naughtymonster, sans-serif;
  font-size: 30px;
  line-height: 130%;
  font-weight: 400;
  margin-top: 20px;
  color: #eeee;
  @media screen and (max-width: 767px) {
    margin-top: 0px;
    border-radius: 15px;
    font-size: 30px;
  }
`;
export const RoadText = styled.div`
  max-width: 350px;
  line-height: 140%;

  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
  @media screen and (max-width: 991px) {
    max-width: 320px;
  }
`;
export const RoadmapRightID = styled.div`
  -webkit-box-align: start;
  align-items: flex-start;
  display: flex;
  margin-bottom: 40px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  color: #f4c44f;
  font-size: 20px;
  font-weight: 600;
  grid-column-end: 3;
  grid-column-start: 2;
  grid-row-end: 6;
  grid-row-start: 5;
  @media screen and (max-width: 767px) {
    grid-column-start: 1;
    grid-column-end: 2;
  }
`;
export const LineText = styled.div`
  flex-direction: column;
  border-right: 1px dashed #f4c44f;
  position: absolute;
  left: auto;
  top: 0px;
  right: 50%;
  bottom: 0px;
  margin-top: 20px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const Circle = styled.img`
  position: relative;
  top: -11px;
  right: -9px;
  transition: transform 1s;
  will-change: transform;
  transform: translate3d(
      0px,
      ${({ scrollNav }) => (scrollNav > 1827 ? scrollNav - 1827 : 0)}px,
      0px
    )
    scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
//1482.2222900390625
