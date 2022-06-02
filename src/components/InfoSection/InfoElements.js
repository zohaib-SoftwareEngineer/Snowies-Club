import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  /* background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")}; */
  /* background: linear-gradient(0.25turn, #4c1109, #a0410f, #4c1109); */
  background: #d49802;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 349px;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  @media screen and (max-width: 768px) {
    height: 1000px;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col2 col1 col3";
  /* Must use '\' css class \'' */

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const Column3 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col3;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.div`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 35.2px;
  line-height: 1.1;
  text-align: center;
  font-family: "Bangers", cursive;
  font-weight: bold;
  color: #17112c;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Heading1 = styled.h1`
  margin-bottom: 24px;
  font-size: 30px;
  line-height: 1.1;
  font-weight: 600;
  color: #17112c;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-family: "Bangers", cursive;
  font-size: 19.2px;
  text-align: center;
  line-height: 24px;
  font-weight: bold;
  color: #17112c;
`;
export const Subtitle1 = styled.p`
  max-width: 440px;
  margin-top: 10px;
  font-family: "Bangers", cursive;
  font-size: 19.2px;
  line-height: 24px;
  text-align: center;
  font-weight: 100;
  color: #17112c;
`;
export const Subtitle2 = styled.p`
  //max-width: 440px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 35px;
  font-size: 14px;
  line-height: 24px;
  font-weight: 600;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  justify-content: ${({ imgStart }) => (imgStart ? "center" : " ")};
  display: flex;
  align-items: ${({ imgStart }) => (imgStart ? "center" : " ")};
  max-width: 555px;
  //height: 100%;
`;

export const Img = styled.img`
  width: 90%;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 30px;
  /* margin-left: 10px; */
  padding-right: 0;

  @media screen and (max-width: 768px) {
    width: 90%;
    margin-top: 0;
    margin-right: 0;
    padding-right: 0;
  }
`;
