import React from 'react';
import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  Faqsdiv,
  // Faqstyle,
  // Faqimg,
  // ServicesWrapper,
  //Cardstyle,
  // ServicesCard,
  // ServicesIcon,
  // ServicesH2,
  // ServicesP,
} from './ServicesElements';
// import Faq1 from '../../images/faq1.png';
// import Faq2 from '../../images/faq2.png';

// import Card from "./filp";
import Faq from 'react-faq-component';

const data = {
  title: '',
  rows: [
    {
      title: 'HOW MUCH IS A CHEEKY LION NFT?',
      content: `We will be holding a presale 3 days prior to the public launch for our Whitelist members. Please join our Discord to learn how you can join the Whitelist! The Whitelist spots will be very limited.
The Public Sale starts on November 7th, 2021, at 9 PM EST. Price Starts at 0.08 ETH + gas.`,
    },
  ],
};
const data1 = {
  title: '',
  rows: [
    {
      title: 'WHERE CAN I VIEW MY CHEEKY LION NFTS?',
      content: `Once you have minted a Cheeky Lion NFT, you will be able to see it by connecting your crypto wallet to OpenSea.`,
    },
  ],
};
const data2 = {
  title: '',
  rows: [
    {
      title: 'WHEN CAN WE MINT CHEEKY LION NFTS?',
      content: `The public launch will be held on November 7th, 2021, at 9 AM EST, while the presale will be held November 4th at 9AM EST.`,
    },
  ],
};
const data3 = {
  title: '',
  rows: [
    {
      title: 'WHAT CAN I DO WITH MY CHEEKY LIONS?',
      content: `You can use your Cheeky Lion as a profile picture online, and you can  resell your Cheeky Lions for profit. Once the Cheeky Cougar Club launches, you will also be able to earn a Free Cheeky Lion Kid NFT!`,
    },
  ],
};
const data4 = {
  title: '',
  rows: [
    {
      title: 'ARE THERE ANY SECONDARY SALE ROYALTIES?',
      content: `Yes, 3.5% of the secondary sales will be deducted in royalties for the Cheeky Lion team. An additional 4% will also be used specifically to grow the marketing campaigns allowing us to raise the floor for our holders!`,
    },
  ],
};

const styles = {
  bgColor: '#570909',
  titleTextColor: '#efeaa1',
  rowTitleColor: '#efeaa1',
  // rowContentColor: 'grey',
  // arrowColor: "red",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};
const Services = props => {
  return (
    <ServicesContainer id='faq'>
      <ServicesH1>frequently asked question's</ServicesH1>
      <ServicesH2>FAQ'S</ServicesH2>
      <Faqsdiv>
        <Faq data={data} styles={styles} config={config} />
        <div style={{ marginTop: 20 }}></div>
        <Faq data={data1} styles={styles} config={config} />
        <div style={{ marginTop: 20 }}></div>
        <Faq data={data2} styles={styles} config={config} />
        <div style={{ marginTop: 20 }}></div>
        <Faq data={data3} styles={styles} config={config} />
        <div style={{ marginTop: 20 }}></div>
        <Faq data={data4} styles={styles} config={config} />
        {/* <div style={{ marginTop: 20 }}></div>
        <Faq data={data5} styles={styles} config={config} /> */}
        {/* <Faqimg src={Faq2} alt="loading" /> */}
        {/* <div style={{ flexDirection: 'column' }}>
          {' '}
          <Card
            front='What is the minting process'
            back='Connect your wallet to the Cheeky Lion Club website and mint
        1 to 10 random Lions for 0.07 eth each.'
          />
          <Card
            front='Secondary Royalties'
            back='0.5% lifetime for minters. 1.5% for Lion holders 4% Marketing and Team'
          />
          <Card
            front='Enter the Club Bar'
            back='Details on how to prove membership will be shared shortly after launch.'
          />
          <Card
            front='Members only Poker Night'
            back='You will have access to our members only online private poker rooms and tables,
        where you can compete against fellow Cheeky Lion members.'
          />
        </div> */}
        {/* <Faqimg src={Faq1} alt="loading" /> */}
      </Faqsdiv>
    </ServicesContainer>
  );
};

export default Services;
