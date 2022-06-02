import React, { useEffect } from "react";
// import Countdown from "react-countdown";
// import { getContractNft } from "../../libs/smart-contract";
// import { _doThis } from "../../libs/utils";
import logo from "../../images/Snowieslogo.png";
// import useWindowSize from 'react-use/lib/useWindowSize';
// import Confetti from "react-confetti";
// import { BsChevronDown } from "react-icons/bs";
import { Bg, Heading, Logoimg, HeadingDiv } from "./HeroElements";
// import { getAndroidDeepLink, getIOSDeepLink } from 'url-to-deep-link';

// import { Modal } from "antd";
// import mobile from 'is-mobile';
// import open from 'open';

function HeroSection() {
  // const [mintCount, setMintCount] = useState(1);
  // const [height, setHeight] = useState(null);
  // const [width, setWidth] = useState(null);
  // const confettiRef = useRef(null);
  // const [loading, setLoading] = useState(false);

  // const [minted, setMinted] = useState(0);
  // const [congrst, setCongrst] = useState(false);

  // const handleOk = () => {
  //   setCongrst(false);
  // };
  // const { width, height } = useWindowSize();
  // const _minted = async () => {
  //   const mint = getContractNft();
  //   // console.log("presale", presale);

  //   const priceOfPenguins = await mint.methods.circulatingSupply().call();
  //   console.log("priceOfPenguins", priceOfPenguins);

  //   return setMinted(8000 - Number(priceOfPenguins));
  // };

  useEffect(() => {
    // _minted();
    // setInterval(() => {
    //   _minted();
    // }, 3000);
  }, []);

  // const Mint = () => (
  //   <>
  //     {minted <= 0 ? null : (
  //       <div className="hero-mint">
  //         <div className="incr-decr">
  //           <button
  //             className="add-button"
  //             onClick={() => {
  //               setMintCount(mintCount - 1);
  //             }}
  //             disabled={mintCount === 1}
  //           >
  //             <span className="button-style">
  //               <svg
  //                 className="svg-button"
  //                 focusable="false"
  //                 viewBox="0 0 24 24"
  //                 aria-hidden="true"
  //               >
  //                 <path d="M19 13H5v-2h14v2z"></path>
  //               </svg>
  //             </span>
  //             <span className="MuiTouchRipple-root"></span>
  //           </button>
  //           <h3 className="mint-count">{mintCount}</h3>
  //           <button
  //             className="add-button"
  //             onClick={() => {
  //               setMintCount(mintCount + 1);
  //             }}
  //             disabled={mintCount === 10}
  //           >
  //             <span className="button-style">
  //               <svg
  //                 className="svg-button"
  //                 focusable="false"
  //                 viewBox="0 0 24 24"
  //                 aria-hidden="true"
  //               >
  //                 <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
  //               </svg>
  //             </span>
  //             <span className="MuiTouchRipple-root"></span>
  //           </button>
  //         </div>
  //         <div className="button-minting">
  //           <div style={{ textAlign: "center" }}>
  //             <button
  //               className="MuiButton-contained"
  //               onClick={() => {
  //                 _doThis(async (account, web3) => {
  //                   if (!mintCount || isNaN(mintCount)) {
  //                     alert("Enter some nft quantity to buy");
  //                     return;
  //                   }

  //                   const nft = getContractNft(web3);
  //                   // const price = web3.utils.fromWei(
  //                   //   await nft.methods.itemPrice().call(),
  //                   // );
  //                   const price = web3.utils.fromWei(
  //                     await nft.methods.itemPrice().call()
  //                   );

  //                   const _howMany = Number(mintCount);
  //                   const totalPrice = web3.utils.toWei(
  //                     (Number(price) * _howMany).toString()
  //                   );

  //                   // here we use code from twitter post of nft
  //                   // const purchase = nft.methods.purchaseTokens(mintCount);
  //                   const purchase = nft.methods.purchaseTokens(mintCount);
  //                   let options = {
  //                     from: account,
  //                     gas: "0",
  //                     value: totalPrice,
  //                   };
  //                   try {
  //                     const estimateGas = Math.trunc(
  //                       await purchase.estimateGas(options)
  //                     );
  //                     options = {
  //                       ...options,
  //                       gas: "" + estimateGas,
  //                     };
  //                   } catch (e) {
  //                     let msg = e.message.split("\n")[0].split("reverted:")[1];

  //                     if (!msg) msg = "Insufficient funds";

  //                     alert(msg);
  //                     return;
  //                   }

  //                   try {
  //                     setLoading(true);
  //                     await purchase.send(options).on("confirmation", (i) => {
  //                       //here
  //                       if (i === 0) {
  //                         setLoading(false);
  //                         if (
  //                           window.confirm(
  //                             `Welcome to the Cheeky Lion Club King! Go check out your Lions on opensea.io`
  //                           )
  //                         ) {
  //                           window.location.href = `https://opensea.io/${account}`;
  //                         }
  //                       }
  //                     });
  //                   } catch (e) {
  //                     setLoading(false);
  //                     alert(e.message);
  //                   }
  //                 }, true);
  //               }}
  //             >
  //               <span className="span-labe-m">
  //                 {loading ? "Minting..." : "Mint"}
  //               </span>
  //               <span className="MuiTouchRipple-root"></span>
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     )}
  //   </>
  // );
  // const Completionist = () => (
  //   <div className="timer">
  //     <div className="timer-space">
  //       <div className="margin-timer">
  //         <div className="countdown-container">
  //           <h3 className="mint-header">Presale Ends In </h3>
  //           <div className="timer-adjustment">
  //             <span className="bird-nft-home__manifest__countdown-item">
  //               <p className="text-good">0</p>
  //               <span className="text-good1">Days</span>
  //             </span>
  //             <span className="bird-nft-home__manifest__countdown-item">
  //               <p className="text-good">0</p>
  //               <span className="text-good1">Hours</span>
  //             </span>
  //             <span className="bird-nft-home__manifest__countdown-item">
  //               <p className="text-good">0</p>
  //               <span className="text-good1">Minutes</span>
  //             </span>
  //             <span className="bird-nft-home__manifest__countdown-item-last">
  //               <p className="text-good">0</p>
  //               <span className="text-good1">Seconds</span>
  //             </span>
  //           </div>
  //         </div>
  //         <Mint />
  //       </div>
  //     </div>
  //     {/* <div>
  //             <div className="mouse_scroll">
  //               <div>
  //                 <span className="m_scroll_arrows unu"></span>
  //                 <span className="m_scroll_arrows doi"></span>
  //                 <span className="m_scroll_arrows trei"></span>
  //               </div>
  //             </div>
  //           </div> */}
  //   </div>
  // );

  // const renderer = ({ days, hours, minutes, seconds, completed }) => {
  //   if (false) {
  //     // Render a complete state
  //     return <Completionist />;
  //   } else {
  //     // Render a countdown
  //     return (
  //       <>
  //         <div className="timer">
  //           <div className="timer-space">
  //             <div className="margin-timer">
  //               <div className="countdown-container">
  //                 <div className="banner-header">
  //                   <h3 className="mint-header">SOLD OUT</h3>
  //                 </div>
  //                 <div className="banner-header1">
  //                   <h3 className="mint-header">SOLD OUT</h3>
  //                 </div>
  //                 <div className="timer-adjustment">
  //                   <span className="bird-nft-home__manifest__countdown-item">
  //                     <p className="text-good">{days}</p>
  //                     <span className="text-good1">Days</span>
  //                   </span>
  //                   <span className="bird-nft-home__manifest__countdown-item">
  //                     <p className="text-good">{hours} </p>
  //                     <span className="text-good1">Hours</span>
  //                   </span>
  //                   <span className="bird-nft-home__manifest__countdown-item">
  //                     <p className="text-good">{minutes} </p>
  //                     <span className="text-good1">Minutes</span>
  //                   </span>
  //                   <span className="bird-nft-home__manifest__countdown-item-last">
  //                     <p className="text-good">{seconds} </p>
  //                     <span className="text-good1">Seconds</span>
  //                   </span>
  //                 </div>
  //                 <NavBtn>
  //                   <NavBtnLink
  //                     href="https://www.cheekycougarclub.com/"
  //                     target="_blank"
  //                   >
  //                     Visit Cheeky Cougar Club
  //                   </NavBtnLink>
  //                 </NavBtn>
  //                 {/* <div className="banner-header" style={{ marginTop: 10 }}>
  //                   {minted <= 0 ? (
  //                     <h3 className="mint-header" style={{ fontSize: 22 }}>
  //                       Sold out
  //                     </h3>
  //                   ) : (
  //                     <h3 className="mint-header" style={{ fontSize: 22 }}>
  //                       Remaining Lions:
  //                       <span> {minted}</span>
  //                     </h3>
  //                   )}
  //                 </div>
  //                 <div className="banner-header1" style={{ marginTop: 10 }}>
  //                   <h3
  //                     className="mint-header1"
  //                     style={{ fontWeight: "bold", color: "white" }}
  //                   >
  //                     Remaining Lions: {minted}
  //                   </h3>
  //                 </div> */}

  //                 {/* <Mint /> */}

  //                 <div
  //                   className="button-minting hide-mobile okok"
  //                   style={{ marginTop: 30 }}
  //                 >
  //                   <div style={{ textAlign: "center" }}>
  //                     <button className="MuiButton-contained">
  //                       <a
  //                         className="span-labe-m "
  //                         href="https://discord.com/invite/cheekylionclub"
  //                         target="_blank"
  //                         rel="noopener noreferrer"
  //                         style={{ color: "white" }}
  //                       >
  //                         Join Discord
  //                       </a>
  //                       <span className="MuiTouchRipple-root"></span>
  //                     </button>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //           {/* <div>
  //             <div className="mouse_scroll">
  //               <div>
  //                 <span className="m_scroll_arrows unu"></span>
  //                 <span className="m_scroll_arrows doi"></span>
  //                 <span className="m_scroll_arrows trei"></span>
  //               </div>
  //             </div>
  //           </div> */}
  //         </div>
  //       </>
  //     );
  //   }
  // };

  // const asyncUseEffect = async () => {
  //   // alert(require('os').type());
  //   // alert(mobile());
  //   // if (mobile()) {
  //   // alert(`hi ${JSON.stringify(open.apps)} ${open.apps}`);
  //   // // await open('https://cheekylionclub.com/');
  //   // await open('https://google.com', {
  //   //   app: {
  //   //     name: open.apps.chrome,
  //   //   },
  //   // });
  //   // // }
  //   const getAndroidnDeepLink = getAndroidDeepLink('https://www.facebook.com/');
  //   const yourIOSDeepLink = getIOSDeepLink('https://www.facebook.com/');
  //   console.log(getAndroidnDeepLink, yourIOSDeepLink);
  // };

  // useEffect(() => {
  //   //   // console.log("require('os').type: ", require('os').type());

  //   //   // asyncUseEffect();

  //   setHeight(confettiRef.current.clientHeight);
  //   setWidth(confettiRef.current.clientWidth);
  // }, []);

  return (
    <>
      <Bg>
        <div>
          <div>
            <Logoimg alt="loading" src={logo} />
          </div>
          <HeadingDiv>
            <Heading> Snowies Club</Heading>
          </HeadingDiv>
        </div>
        {/* {congrst && <Confetti width={width} height={height} />}
        <Modal
          visible={congrst}
          mask={true}
          onOk={handleOk}
          onCancel={handleOk}
        >
          <p>Welcome To Cheeky Lion Club</p>
          <p>
            Congratulations
            <span role="img" aria-label="party">
              🎉
            </span>
          </p>
        </Modal> */}
      </Bg>
    </>
    // <HeroContainer id="home">
    //   <HeroBg>
    //     <VideoBg  />
    //   </HeroBg>
    //   <HeroContent>
    //     <HeroBtnWrapper></HeroBtnWrapper>
    //   </HeroContent>
    //   <div class="mouse_scroll">
    //     <div style={{ marginTop: 200 }}>
    //       <span class="m_scroll_arrows unu"></span>
    //       <span class="m_scroll_arrows doi"></span>
    //       <span class="m_scroll_arrows trei"></span>
    //     </div>
    //   </div>
    // </HeroContainer>
    // <div style={{ height: 900 }}>
    //   <div style={{ backgroundImage: `url(${Loin})` }}></div>
    // </div>
  );
}

export default HeroSection;
