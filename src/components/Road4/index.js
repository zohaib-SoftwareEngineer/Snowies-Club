import React from 'react';
import {
  ServicesContainer,
  Subtitle,
  Heading1,
  Welcome,
  Welcomeimg,
  SubtitleSpan,
  SubtitleSpan1,
  SubtitleSpan2,
  ImgAdjustment,
  // ServicesWrapper,
  //Cardstyle,
  // ServicesCard,
  // ServicesIcon,
  // ServicesH2,
  // ServicesP,
} from './ServicesElements';
import Faq1 from '../../images/roadmapcommunity.png';

// import Faq2 from "../../images/faq2.png";
// import Card from "./filp";
const Services = props => {
  return (
    <ServicesContainer id='story'>
      <Welcome>
        <div style={{ flexDirection: 'row' }}>
          <Heading1>5. Community Breeding </Heading1>
          <div style={{ flexDirection: 'column' }}>
            <Subtitle>
              Next Up we have the Cheeky Cougar Club! Combining your Cheeky Lion
              <br />
              <div className='margin-letter-space'></div>
              <SubtitleSpan>
                with a Cougar will give you free access to our Cheeky Lion Kids!
                <br />
                <div className='margin-letter-space'></div>
                <SubtitleSpan1>
                  Breeding will allow us to raise the floor price for our
                  <br /> <div className='margin-letter-space'></div>
                  <SubtitleSpan2>cheeky lion kings!</SubtitleSpan2>
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
