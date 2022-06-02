import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
  Subtitle1,
  Subtitle2,
  Column3,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  description,
  description1,
  description2,
  description3,
  img,
  alt,
  id,
  primary,
  darkText,
  heading,
  img1,
}) => {
  console.log(primary);
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow>
            <Column2>
              <ImgWrap>
                <Img src={img1} alt={alt} />
              </ImgWrap>
            </Column2>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <Subtitle2>{description2}</Subtitle2>
                <Subtitle1>{description1}</Subtitle1>
              </TextWrapper>
            </Column1>
            <Column3>
              <ImgWrap imgStart={imgStart}>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column3>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
