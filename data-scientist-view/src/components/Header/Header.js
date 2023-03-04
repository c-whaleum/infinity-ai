
import './Header.scss';
import { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { shortenWalletAddress } from "../../util/util";;

const providerOptions = {};

function Header() {
  const [isWalletConnected, setWalletConnected] = useState(false);
  const [web3ModalProvider, setWeb3ModalProvider] = useState(false);

  useEffect(() => {

  });

  const connectWallet = async () => {
    try {
      let web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions,
      });

      const web3ModalInstance = await web3Modal.connect();
      const web3ModalProvider = new ethers.providers.Web3Provider(
        web3ModalInstance
      );

      setWalletConnected(true)
      setWeb3ModalProvider(web3ModalProvider)
    } catch (error) {
      console.error("connectWallet error", connectWallet);
    }
  }

  return (
    <div className="Header">
      <div className='Header__inner'>
        <nav class="Header__navbar navbar navbar-expand-lg bg-body-tertiary">
          <div class="Header__logo">
            <svg className="Header__logoSvg" fill="#FFF" width="800px" height="800px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
              <path d="M252,128a59.99981,59.99981,0,0,1-102.42627,42.42627q-.25709-.25708-.49805-.5293L89.21533,102.30615a36,36,0,1,0,0,51.3877L92.30078,150.21a12,12,0,0,1,17.9668,15.91211l-3.34326,3.7749q-.241.27173-.498.5293a60,60,0,1,1,0-84.85254q.25709.25709.498.5293l59.86035,67.59082a36,36,0,1,0,0-51.3877L163.69922,105.79a12,12,0,0,1-17.9668-15.91211l3.34326-3.7749q.241-.27174.49805-.5293A60,60,0,0,1,252,128Z" />
            </svg>
            <a class="Header__navBarBrand navbar-brand" href="#">Infinity AI</a>

          </div>


          {/* <ul class="Header__navBarNav navbar-nav me-auto">
              <li class="Header__navItem nav-item">
                <a class="Header__navLink nav-link active" aria-current="page" href="#">Hospital Intake Dashboard</a>
              </li>
              <li class="Header__navItem nav-item">
                <a class="Header__navLink nav-link" href="#">Data Scientist Dashboard</a>
              </li>
            </ul> */}
          <div className={`Header__loginRegisterBtnWrapper`}>
            {!isWalletConnected ? (
              <button className={`Header__loginRegisterText`} onClick={() => connectWallet()}>Connect Wallet</button>
            ) : (
              <div>
                {shortenWalletAddress(web3ModalProvider?._network?.ensAddress)}
              </div>
            )}

          </div>


        </nav>
      </div>
    </div>
  );
}

export default Header;
