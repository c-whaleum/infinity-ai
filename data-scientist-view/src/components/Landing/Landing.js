import React, { Component } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleModelChange = this.handleModelChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.model);
  }

  handleModelChange(e) {
    this.setState({ model: e.target.value });
  }

  render() {
    return (
      <div className="Landing">
        <form className="model-submission" onSubmit={this.handleSubmit}>
          <h4>Add training model:</h4>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-lg w-full max-w-xs"
            value={this.state.model}
            onChange={this.handleModelChange}
          />

          <button className="btn btn-outline">Submit</button>
        </form>
      </div>
    );
  }
}

export default Landing;
