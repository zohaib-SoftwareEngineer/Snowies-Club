import React from "react";
import {
  ServicesContainer,
  Heading,
  Subtitle,
  // Subtitle1,
  Welcome,
  Welcomeimg,
  Welcomeimg1,
  ImgDiv,
  // Subtitle1Span,
  // SubtitleSpan,
  // ServicesWrapper,
  //Cardstyle,
  // ServicesCard,
  // ServicesIcon,
  // ServicesH2,
  // ServicesP,
} from "./ServicesElements";
import Specs1 from "../../images/Collection of 10000 Snowies.png";
// import Specs2 from "../../images/Collection of 10000 Snowies.png";

// import Faq2 from "../../images/faq2.png";
// import Card from "./filp";
const Services = (props) => {
  return (
    <ServicesContainer id="about">
      <Heading>A Collection of 10,000 Snowies</Heading>

      <Welcome>
        <div style={{ display: "flex", width: "90%", marginTop: 30 }}>
          {" "}
          <ImgDiv>
            <Welcomeimg src={Specs1} />
          </ImgDiv>
          <div style={{ marginTop: "2%" }}>
            {" "}
            <Subtitle>
              Snowies club is a collectibles NFT PRoject, Made up of over a
              hundred <br />
              different traits - faces, hair, hats, outfits and backgrounds.
              <br />
              Each snowies is a unique,Non-fungible token
              <br />
              on the avalanche blockchain.
            </Subtitle>
            <Subtitle>
              Holding a snowies allows you to participate in voting,
              coordinating <br />
              the artist launchpad treasury,and getting access to <br />
              exclusive NFT projects on the avalanche chain,
              <br /> This treasury will be seeded with thousand Avax <br />
              after public sale ends!
            </Subtitle>
            <Subtitle>
              Join the Snowies community on twitter and discord!
            </Subtitle>
          </div>
        </div>

        <Welcomeimg1 src={Specs1} alt="loading" />
      </Welcome>
    </ServicesContainer>
  );
};

export default Services;
