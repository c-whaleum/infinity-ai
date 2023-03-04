import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";

import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";

const providerOptions = {};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      walletConnected: false,
    };
    this.connectWallet = this.connectWallet.bind(this);
  }

  async connectWallet() {
    try {
      let web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions,
      });

      const web3ModalInstance = await web3Modal.connect();
      const web3ModalProvider = new ethers.providers.Web3Provider(
        web3ModalInstance
      );

      console.log(web3ModalProvider);

      this.setState({ walletConnected: true });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div className="App">
        {!this.state.walletConnected ? (
          <div>
            <h1>Please connect wallet to begin</h1>
            <button onClick={this.connectWallet}>Connect Wallet</button>
          </div>
        ) : (
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Landing />} />
            </Routes>
          </div>
        )}
      </div>
    );
  }
}

export default App;
