import React, { useState, useEffect } from "react";
import {
  ServicesContainer,
  Heading,
  // Heading1,
  Subtitle,
  // Subtitle1,
  MintingButton,
  Input2,
  Welcome,
  DirectionFlex,
  // Welcomeimg,
  // Subtitle1Span,
  // SubtitleSpan,
  // ServicesWrapper,
  //Cardstyle,
  // ServicesCard,
  // ServicesIcon,
  // ServicesH2,
  // ServicesP,
} from "./ServicesElements";
import { _doThis } from "../../libs/utils";
import { getContractNft } from "../../libs/smart-contract";

import Mint from "../../images/Mint Button.png";

// import Faq2 from "../../images/faq2.png";
// import Card from "./filp";
const Services = (props) => {
  const [mintCount, setMintCount] = useState();
  const [loading, setLoading] = useState(false);
  const [minted, setMinted] = useState(0);
  const [item, setItem] = useState(0);

  const _minted = async () => {
    const mint = getContractNft();
    // console.log("presale", mint);

    const remainingSnow = await mint.methods.circulatingSupply().call();
    // console.log("remainingSnow", itemPrice);
    return setMinted(remainingSnow);
  };
  const _itemPrices = async () => {
    const mint = getContractNft();
    const itemPrice = await mint.methods.itemPrice().call();
    return setItem(itemPrice / 10 ** 18);
  };

  useEffect(() => {
    _minted();
    _itemPrices();
    setInterval(() => {
      _minted();
      _itemPrices();
    }, 3000);
  }, []);

  return (
    <ServicesContainer>
      <Welcome>
        <DirectionFlex>
          <Heading>Market</Heading>
          <div style={{ flexDirection: "column" }}>
            <Subtitle>MINTING PRICE : {item} Avax</Subtitle>
            <Subtitle>MINT 10 AND GET THE 11th FOR FREE!</Subtitle>
            <Subtitle>MINT PROGESS : {minted}/10000</Subtitle>

            <Input2
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              max="10"
              value={mintCount}
              onChange={(e) => setMintCount(e.target.value)}
            />
            <MintingButton
              src={Mint}
              alt="loading"
              onClick={() => {
                console.log("checkingValue :" + loading);
                _doThis(async (account, web3) => {
                  if (!mintCount || isNaN(mintCount)) {
                    alert("Enter some nft quantity to buy");
                    return;
                  }

                  const nft = getContractNft(web3);
                  // const price = web3.utils.fromWei(
                  //   await nft.methods.itemPrice().call(),
                  // );
                  const price = web3.utils.fromWei(
                    await nft.methods.itemPrice().call()
                  );

                  const _howMany = Number(mintCount);
                  const totalPrice = web3.utils.toWei(
                    (Number(price) * _howMany).toString()
                  );

                  // here we use code from twitter post of nft
                  // const purchase = nft.methods.purchaseTokens(mintCount);
                  const purchase = nft.methods.purchaseTokens(mintCount);
                  let options = {
                    from: account,
                    gas: "0",
                    value: totalPrice,
                  };
                  try {
                    const estimateGas = Math.trunc(
                      await purchase.estimateGas(options)
                    );
                    options = {
                      ...options,
                      gas: "" + estimateGas,
                    };
                  } catch (e) {
                    let msg = null;

                    try {
                      let a = e.message;
                      msg = JSON.parse(
                        a.substring(a.indexOf("{"), a.lastIndexOf("}") + 1)
                      ).message;
                      msg = msg.replace("err: ", "");
                      msg = msg.replace("execution reverted: ", "");
                    } catch (eiii) {}

                    if (!msg || msg === undefined) {
                      msg = "Insufficient funds or some data error";
                    }

                    alert(msg);
                    return;
                  }

                  try {
                    setLoading(true);
                    await purchase.send(options).on("confirmation", (i) => {
                      //here
                      if (i === 0) {
                        setLoading(false);
                        if (
                          window.confirm(
                            `Welcome to the Snowies Club ! Go check out your Snowies on NFTrade.io`
                          )
                        ) {
                          window.location.href = `https://nftrade.com/users/avalanche/${account}`;
                        }
                      }
                    });
                  } catch (e) {
                    setLoading(false);
                    alert(e.message);
                  }
                }, true);
              }}
            />
          </div>
        </DirectionFlex>

        {/* <Welcomeimg src={Faq1} alt='loading' /> */}
      </Welcome>
    </ServicesContainer>
  );
};

export default Services;
