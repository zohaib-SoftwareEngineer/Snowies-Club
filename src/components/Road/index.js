import React from "react";
import {
  ServicesContainer,
  Heading,
  Subtitle,
  LinkImg,
  RoadMapOne,
  Heading1,
  RoadMapImgOne,
  RoadMapTwo,
  RoadMapThree,
  RoadMapFour,
  // Welcome,
  // Welcomeimg,
  // Bg,
  // ImgAdjustment,
  // SubtitleSpan,
  // ServicesWrapper,
  //Cardstyle,
  // ServicesCard,
  // ServicesIcon,
  // ServicesH2,
  // ServicesP,
} from "./ServicesElements";
import Faq1 from "../../images/Roadmap1.png";
import linkImg from "../../images/Roadmap Road.png";
import Road2 from "../../images/Roadmap 2.png";
import Road3 from "../../images/Roadmap 3.png";
import Road4 from "../../images/Roadmap 4.png";
// import Faq2 from "../../images/faq2.png";
// import Card from "./filp";
const Services = (props) => {
  return (
    <ServicesContainer id="story">
      <Heading>Roadmap</Heading>
      <LinkImg src={linkImg} />
      <RoadMapOne>
        <div>
          <RoadMapImgOne src={Faq1} />
        </div>
        <div
          style={{
            width: "80%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Heading1>1. Seeding and Creation</Heading1>
          <Subtitle>
            Starting with the public mint, we will be aiming to sell out the
            <br />
            entire collection of snowies club to raise fund for the launchpad
            <br />
            treasury. Rarity rank checker will be implemented on the website.
          </Subtitle>
        </div>
      </RoadMapOne>
      <RoadMapTwo>
        <div
          style={{
            width: "80%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Heading1>2. Secondary Market Listing</Heading1>
          <Subtitle>
            We will work with NFTTrade and NFTKey marketplace on Avax for
            secondary listing.
          </Subtitle>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <RoadMapImgOne src={Road2} />
        </div>
      </RoadMapTwo>

      <RoadMapThree>
        <div>
          <RoadMapImgOne src={Road3} />
        </div>
        <div
          style={{
            width: "80%",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Heading1>3. Collaborations and Giveaways</Heading1>
          <Subtitle>
            We will then be moving into collaborations with different artist
            <br />
            for future nft projects creations, providing exclusive access
            <br />
            to limited and unique nfts for snowies holders,
            <br />
            as a form of appreciating our supports.
          </Subtitle>
        </div>
      </RoadMapThree>

      <RoadMapFour>
        <div
          style={{
            width: "80%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Heading1>4. Incubating and Rewarding</Heading1>
          <Subtitle>
            Revenue sharing plan will be worked out with partners NFT
            <br />
            projects, allowing profit to be distributed to snowies hodlers.
            <br />
            This is how we are rewarding the community
          </Subtitle>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <RoadMapImgOne src={Road4} />
        </div>
      </RoadMapFour>
    </ServicesContainer>
  );
};

export default Services;
