import React, { useEffect, useState } from 'react';
// import Icon1 from '../../images/svg-1.svg';
// import Icon2 from '../../images/svg-3.svg';
// import Icon3 from '../../images/svg-5.svg';
import Loin1 from '../../images/Loin1.jpeg';
import Loin2 from '../../images/Loin2.jpeg';
import Loin3 from '../../images/Loin3.jpeg';
import Loin4 from '../../images/Loin4.jpeg';
import Loin5 from '../../images/Loin5.jpeg';

import {
  ServicesContainer,
  ServicesH1,
  // ServicesWrapper,
  // ServicesCard,
  // ServicesIcon,
  // ServicesH2,
  RoadMapSec,
  Boxroad,
  MainContainter,
  RoadMapBox,
  RoadLeft,
  RoadHeading,
  RoadText,
  RoadRight,
  LineText,
  Circle,
  RoadLeftID,
  RoadRightID,
  RoadLeftID1,
  RoadmapRightimg,
  RoadmapLeftimg,
  RoadmapRightIDimg,
  RoadmapRightID,
  RoadmapLeftIDimg,
  // RoadRightID1,
} from './ServicesElements';
// import styled from 'styled-components';

const Roadmap = () => {
  const [scrollNav, setScrollNav] = useState(0);

  const changeNav = () => {
    // console.log(window.scrollY);
    // if (window.scrollY >= 80) {
    //   setScrollNav(true);
    // } else {
    //   setScrollNav(false);
    // 2627.77783203125}
    if (window.scrollY <= 3498) setScrollNav(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  return (
    <ServicesContainer id='story'>
      <RoadMapSec>
        <ServicesH1>Road Map</ServicesH1>
        <Boxroad>
          <MainContainter>
            <RoadMapBox>
              <RoadLeft
                data-aos='fade-right'
                data-aos-offset='300'
                data-aos-duration='1000'
                data-aos-easing='ease-in-sine'
              >
                <RoadHeading>GIVEAWAYS</RoadHeading>
                <RoadText>
                  Strap on, there are going to be multiple givewas giving you a
                  chance to win one of our cheeky lion NFTs, allowing you to be
                  a part of our exclusive community.<br></br>
                </RoadText>
              </RoadLeft>
              <RoadmapRightimg
                data-aos='fade-left'
                data-aos-offset='300'
                data-aos-duration='1000'
                data-aos-easing='ease-in-sine'
              >
                <img
                  src={Loin1}
                  alt='Loading'
                  style={{
                    width: 310,
                    height: 300,
                    borderRadius: 17,
                    border: '4px solid white',
                  }}
                />
              </RoadmapRightimg>
              <RoadRight
                data-aos='fade-left'
                data-aos-offset='300'
                data-aos-duration='1000'
                data-aos-easing='ease-in-sine'
              >
                <RoadHeading>LAUNCH</RoadHeading>
                <RoadText>
                  10000 Cheeky Lions will break into the Ethereum Blockchain.
                  Catch one if you can..
                  <br></br>
                </RoadText>
              </RoadRight>

              <RoadmapLeftimg
                data-aos='fade-right'
                data-aos-offset='300'
                data-aos-duration='1000'
                data-aos-easing='ease-in-sine'
              >
                <img
                  src={Loin2}
                  alt='Loading'
                  style={{
                    width: 310,
                    height: 300,
                    borderRadius: 17,
                    border: '4px solid white',
                  }}
                />
              </RoadmapLeftimg>

              <RoadLeftID
                data-aos='fade-right'
                data-aos-offset='300'
                data-aos-duration='1000'
                data-aos-easing='ease-in-sine'
              >
                <RoadHeading>The Club Bar</RoadHeading>
                <RoadText>
                  The doors open, let the cheekiness, benders and poker games
                  begin!
                  <br></br>
                </RoadText>
              </RoadLeftID>

              <RoadmapRightIDimg
                data-aos='fade-left'
                data-aos-offset='300'
                data-aos-duration='1000'
                data-aos-easing='ease-in-sine'
              >
                <img
                  src={Loin3}
                  alt='Loading'
                  style={{
                    width: 310,
                    height: 300,
                    borderRadius: 17,
                    border: '4px solid white',
                  }}
                />
              </RoadmapRightIDimg>

              <RoadRightID
                data-aos='fade-left'
                data-aos-offset='300'
                data-aos-duration='1000'
                data-aos-easing='ease-in-sine'
              >
                <RoadHeading>Merchandise</RoadHeading>
                <RoadText>
                  An exclusive 1 of 1 NFT hoodie becomes available to each
                  Cheeky Lion Holder.
                  <br></br>
                </RoadText>
              </RoadRightID>

              <RoadmapLeftIDimg
                data-aos='fade-right'
                data-aos-offset='300'
                data-aos-duration='1000'
                data-aos-easing='ease-in-sine'
              >
                <img
                  src={Loin4}
                  alt='Loading'
                  style={{
                    width: 310,
                    height: 300,
                    borderRadius: 17,
                    border: '4px solid white',
                  }}
                />
              </RoadmapLeftIDimg>
              <RoadLeftID1
                data-aos='fade-right'
                data-aos-offset='300'
                data-aos-duration='1000'
                data-aos-easing='ease-in-sine'
              >
                <RoadHeading>Breeding</RoadHeading>
                <RoadText>
                  Mate with our female counterparts, to create an exclusive, one
                  of a kind Cheeky Baby Lion.
                  <br></br>
                </RoadText>
              </RoadLeftID1>
              <RoadmapRightID
                data-aos='fade-left'
                data-aos-offset='300'
                data-aos-duration='1000'
                data-aos-easing='ease-in-sine'
              >
                <img
                  src={Loin5}
                  alt='Loading'
                  style={{
                    width: 310,
                    height: 300,
                    borderRadius: 17,
                    border: '4px solid white',
                  }}
                />
              </RoadmapRightID>
              {/* 
              <RoadRightID1>
                <RoadHeading>WEALTH REDISTRIBUTION</RoadHeading>
                <RoadText>
                  Once we are up, running and making profits, we will create a
                  DAO and let the community make decisions on game development
                  and tresorie usage. Profits will be able to be redistributed
                  among Lion holders.
                  <br></br>
                </RoadText>
              </RoadRightID1> */}

              <LineText>
                <Circle
                  src='https://uploads-ssl.webflow.com/60dd8229e5124c76ddee5df0/60ddcebdcbb85fb29c0c552b_Ellipse%205.svg'
                  loading='lazy'
                  alt
                  scrollNav={scrollNav}
                />
              </LineText>
            </RoadMapBox>
          </MainContainter>
        </Boxroad>
      </RoadMapSec>
    </ServicesContainer>
  );
};

export default Roadmap;
