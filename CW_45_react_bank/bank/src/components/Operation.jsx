import React, { Component } from "react";

export default class Operation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sum: 0,
    };
  }
  render() {
    return (
      <div className="container-fluid">
      <div className="d-flex justify-content-center">
      <button
      className="btn btn-primary btn-lg mx-3"
          onClick={() => {
            this.props.withdraw(this.state.sum);
            this.setState({ sum: 0 });
          }}
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
        onClick={() => {
            this.props.deposit(this.state.sum);
            this.setState({ sum: 0 });
          }}
        >
          Deposit
        </button>
      </div>
      <div className="d-flex justify-content-center pt-3">
        <button 
        onClick={this.props.fetchQuote}
        className="btn btn-info btn-lg">Get Quote</button>
      </div>
      </div>
        
    );
  }
}
