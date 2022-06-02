import React from "react";
import {
  ServicesContainer,
  Subtitle,
  Heading1,
  Welcomeimg,
  Welcome,
  SubtitleSpan,
  SubtitleSpan1,
  ImgAdjustment,
  // ServicesWrapper,
  //Cardstyle,
  // ServicesCard,
  // ServicesIcon,
  // ServicesH2,
  // ServicesP,
} from "./ServicesElements";
import Faq1 from "../../images/roadmapclub.png";

// import Faq2 from "../../images/faq2.png";
// import Card from "./filp";
const Services = (props) => {
  return (
    <ServicesContainer id="story">
      <Welcome>
        <div style={{ flexDirection: "row" }}>
          <Heading1>3. Exclusive Club Bar </Heading1>
          <div style={{ flexDirection: "column" }}>
            <Subtitle>
              you will be granted access to our exclusive members
              <br />
              <div className="margin-letter-space"></div>
              <SubtitleSpan>
                only Club. <br />
                <div className="margin-letter-space"></div>
                <SubtitleSpan1>
                  here you can chat about Investments, Real Estate,
                  <br />
                  <div className="margin-letter-space"></div>
                  Crypto and NFTS.
                </SubtitleSpan1>
              </SubtitleSpan>
            </Subtitle>
          </div>
        </div>
        <ImgAdjustment>
          <Welcomeimg src={Faq1} />
        </ImgAdjustment>
      </Welcome>
    </ServicesContainer>
  );
};

export default Services;
