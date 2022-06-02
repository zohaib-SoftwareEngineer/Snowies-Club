import React from "react";
import {
  ServicesContainer,
  Subtitle,
  Heading1,
  Welcome,
  Welcomeimg,
  SubtitleSpan,
  SubtitleSpan2,
  ImgAdjustment,
  // ServicesWrapper,
  //Cardstyle,
  // ServicesCard,
  // ServicesIcon,
  // ServicesH2,
  // ServicesP,
} from "./ServicesElements";
import Faq1 from "../../images/road22.png.png";

// import Faq2 from "../../images/faq2.png";
// import Card from "./filp";
const Services = (props) => {
  return (
    <ServicesContainer id="story">
      <Welcome>
        <ImgAdjustment>
          <Welcomeimg src={Faq1} alt="loading" />
        </ImgAdjustment>
        <div style={{ flexDirection: "row" }}>
          <Heading1>2. project launch </Heading1>
          <div style={{ flexDirection: "column" }}>
            <Subtitle>
              8,000 Cheeky Lions will claw their way into the Ethereum
              Blockchain. <br />
              <div className="margin-letter-space"></div>
              <SubtitleSpan>
                <SubtitleSpan2>Catch one if you can..</SubtitleSpan2>
                <br />
                <div className="margin-letter-space"></div>{" "}
                <SubtitleSpan>
                  AND HAVE A CHANCE TO WIN ONE OF OUR LEGENDARY LIONS!
                </SubtitleSpan>
              </SubtitleSpan>
            </Subtitle>
          </div>
        </div>
      </Welcome>
    </ServicesContainer>
  );
};

export default Services;
