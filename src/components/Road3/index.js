import React from 'react';
import {
  ServicesContainer,
  Subtitle,
  Heading1,
  Welcome,
  Welcomeimg,
  SubtitleSpan,
  ImgAdjustment,
  // ServicesWrapper,
  //Cardstyle,
  // ServicesCard,
  // ServicesIcon,
  // ServicesH2,
  // ServicesP,
} from './ServicesElements';
import Faq1 from '../../images/roadmapmerch.png';

// import Faq2 from "../../images/faq2.png";
// import Card from "./filp";
const Services = props => {
  return (
    <ServicesContainer id='story'>
      <Welcome>
        <ImgAdjustment>
          <Welcomeimg src={Faq1} alt='loading' />
        </ImgAdjustment>
        <div style={{ flexDirection: 'row' }}>
          <Heading1>4. 1-of-1 Merchandise </Heading1>
          <div style={{ flexDirection: 'column' }}>
            <Subtitle>
              Holders will have access to the Cheeky Lion Club Merch Store where
              <br />
              <div className='margin-letter-space'></div>
              <SubtitleSpan>
                they can order their 1-of-1 Cheeky Lion Hoodie!
                <br />
                <div className='margin-letter-space'></div>
                <SubtitleSpan>
                  there will only ever be 8,000 Hoodies ever made
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
