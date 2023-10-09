import React, { useState } from "react";
import { deposit, putQuote, withdraw } from "../actions/accountActions";
import { useDispatch } from "react-redux";

const Operation = () => {
  
  const [sum, setSum] = useState(1);
  const dispatch = useDispatch();

  const handleClickGetQuote = async () => {
    const response = await fetch('https://api.gameofthronesquotes.xyz/v1/random');
    const data = await response.json();
    dispatch(putQuote(data.sentence)); // TODO
  }

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-primary btn-lg mx-3"
          onClick={() => dispatch(withdraw(sum))}
        >
          Withdraw
        </button>
        <input
          className="form-control-lg text-center"
          onChange={(e) => setSum(+e.target.value)}
          value={sum}
          type="number"
          min={0}
        />
        <button
          className="btn btn-primary btn-lg mx-3"
          onClick={() => dispatch(deposit(sum))}
        >
          Deposit
        </button>
      </div>
      <div className="d-flex justify-content-center pt-3">
        <button
          onClick={handleClickGetQuote}
          className="btn btn-info btn-lg"
        >
          Get Quote
        </button>
      </div>
    </div>
  );
}

export default Operation;
