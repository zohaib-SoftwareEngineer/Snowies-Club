import Web3 from "web3";
// import { Toast, Alert } from "react-bootstrap";
import detectEthereumProvider from "@metamask/detect-provider";
import {
  getContractNft,
  requiredChainId,
  requiredChainIdName,
} from "../libs/smart-contract";
import { message } from "antd";
import "antd/dist/antd.css";
import MetaMaskOnboarding from "@metamask/onboarding";

const msg_mobile = "Please use MetaMask!";
const msg_desk = "Please intall MetaMask Wallet extension";
const deepLink = "https://metamask.app.link/dapp/snowiesclub.com/";

const msg_chain = `Please switch network to ${requiredChainIdName}!`;

export const _doThis = async (todo: any = null, prompt: any = true) => {
  const isMobile = require("is-mobile")();

  if (prompt && !MetaMaskOnboarding.isMetaMaskInstalled()) {
    if (isMobile) {
      if (window.confirm(msg_mobile)) window.location.href = deepLink;
    } else {
      if (window.confirm(msg_desk)) new MetaMaskOnboarding().startOnboarding();
    }
  }

  const ethereum: any = await detectEthereumProvider();

  if (ethereum && (prompt || (await ethereum.isConnected()))) {
    const [account] = await ethereum.request({
      method: "eth_requestAccounts",
    });
    const chainId = await ethereum.request({
      method: "eth_chainId",
    });
    console.log({ chainId });

    if (chainId === requiredChainId) todo && todo(account, new Web3(ethereum));
    else alert(msg_chain);
  }
};

export const showAddress = (_address: any) => {
  return (
    _address.substr(0, 4) +
    "****" +
    _address.substr(_address.length - 4, _address.length)
  );
};
export const _connectButtonWorkWithoutPrompt = async () => {
  return await _doThis(() => {}, false);
};

export const _minted = async () => {
  const provider: any = await detectEthereumProvider();
  if (provider) {
    const web3 = new Web3(provider);
    console.log(web3);
    const acc = await provider.request({
      method: "eth_requestAccounts",
    });
    console.log("acc", acc);
    const mint = getContractNft();
    // console.log("presale", presale);

    const priceOfPenguins = await mint.methods.circulatingSupply().call();
    console.log("priceOfPenguins", priceOfPenguins);

    return priceOfPenguins;
  }
};

export const _itemPrice = async () => {
  const provider: any = await detectEthereumProvider();
  if (provider) {
    const web3 = new Web3(provider);
    console.log(web3);
    const acc = await provider.request({
      method: "eth_requestAccounts",
    });
    console.log("acc", acc);
    const itemPrice = getContractNft();
    // console.log("presale", presale);

    const priceOfPenguins = await itemPrice.methods.itemPrice().call();
    console.log("priceOfPenguins", priceOfPenguins);

    return priceOfPenguins;
  }
};

export const _purchasePenguins = async (_howMany: any, setLoading: any) => {
  const provider: any = await detectEthereumProvider();
  if (provider) {
    const web3 = new Web3(provider);
    const acc = await provider.request({
      method: "eth_requestAccounts",
    });
    console.log(acc);
    const priceOfPenguins = web3.utils.fromWei(await _itemPrice());
    const totalPrice = web3.utils.toWei(
      (Number(priceOfPenguins) * _howMany).toString()
    );
    const penguinsContract = getContractNft(web3);

    // here we use code from twitter post of nft
    const purchase = penguinsContract.methods.purchaseTokens(_howMany);
    console.log(_howMany + "howmany");
    let options = {
      from: (await web3.eth.getAccounts())[0],
      gas: "0",
      value: totalPrice,
    };
    try {
      const estimateGasPrice1 = await purchase.estimateGas(options);
      const estimateGasPrice2 = Math.trunc(1.2 * estimateGasPrice1);
      options = { ...options, gas: "" + estimateGasPrice2 };
    } catch (err) {
      message.error("Transaction Failed");
      setLoading(false);
      return;
    }

    try {
      await purchase.send(options).on("confirmation", (i: any) => {
        if (i === 0) {
          message.success("Approved");
          setLoading(false);
        }
      });
    } catch (err) {
      console.log(err);
      message.error("Transaction Failed");
      setLoading(false);
    }
    // try {
    //   await purchase.send(options).on('confirmation', (i: any) => {
    //     //here
    //     if (i === 0) {
    //       alert('Approved');
    //       setLoading(false);
    //     }
    //   });
    // } catch (e: any) {
    //   // console.log(e.message);
    //   alert(e.message);
    //   setLoading(false);
    // }
  }
};

/*
 console.log(
    'ethereum._metamask.isUnlocked(): ',
    await ethereum._metamask.isUnlocked(),
  );
  console.log('await ethereum.isConnected(): ', await ethereum.isConnected());
*/
