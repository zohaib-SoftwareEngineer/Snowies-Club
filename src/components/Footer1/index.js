import React from "react";
import {
  ServicesContainer,
  ServicesWrapper,
  Heading,
  Heading1,
  Heading2,
  HeadingDiv,
  Heading1Div,
  // ServicesWrapper,
  //Cardstyle,
  // ServicesCard,
  // ServicesIcon,
  // ServicesH2,
  // ServicesP,
} from "./ServicesElements";

import Faq1 from "../../images/Snowieslogo.png";
// import Faq2 from "../../images/faq2.png";
// import Discord from "../../images/Opensea.png";
// import Insta from "../../images/Instagram.png";
// import Twitter from "../../images/Twitter.png";
// import Opensea from "../../images/Discode.png";
// import CLC from "../../images/footerClC.png";
// import Card from   "./filp";
const Services = (props) => {
  return (
    <ServicesContainer id="faq">
      <ServicesWrapper>
        <Heading>Thanks for visting</Heading>
      </ServicesWrapper>
      <HeadingDiv>
        <img src={Faq1} style={{ width: "7%" }} alt="" />
        <Heading1>Snowies Club</Heading1>
        <Heading1Div>
          <Heading2
            target="_blank"
            href="https://discord.com/invite/uEDP3KYb7n"
          >
            Discord
          </Heading2>
          <Heading2 target="_blank" href="https://twitter.com/NftSnowies">
            Twitter
          </Heading2>
        </Heading1Div>
      </HeadingDiv>
    </ServicesContainer>
  );
};

export default Services;
