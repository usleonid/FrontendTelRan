import React, { Component } from "react";
import { store } from "../configureStore/store";
import { deposit, putQuote, withdraw } from "../actions/accountActions";

export default class Operation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sum: 0,
    };
  }

  handleClickGetQuote = async () => {
    const response = await fetch('https://api.gameofthronesquotes.xyz/v1/random');
    const data = await response.json();
    store.dispatch(putQuote(data.sentence));
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-primary btn-lg mx-3"
            onClick={() => store.dispatch(withdraw(this.state.sum))}
          >
            Withdraw
          </button>
          <input
            className="form-control-lg text-center"
            onChange={(e) => this.setState({ sum: +e.target.value })}
            value={this.state.sum}
            type="number"
            min={0}
          />
          <button
            className="btn btn-primary btn-lg mx-3"
            onClick={() => store.dispatch(deposit(this.state.sum))}
          >
            Deposit
          </button>
        </div>
        <div className="d-flex justify-content-center pt-3">
          <button
            onClick={this.handleClickGetQuote}
            className="btn btn-info btn-lg"
          >
            Get Quote
          </button>
        </div>
      </div>
    );
  }
}
