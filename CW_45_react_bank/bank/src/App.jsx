import React, { Component } from 'react'
import './App.css'
import Balance from './components/Balance'
import Operation from './components/Operation'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      balance: 0,
      quote: 'Winter is coming...'
    }
  }

  deposit = sum => {
    this.setState(prevState => ({balance: prevState.balance + sum}))
  }

  withdraw = sum => {
    this.setState(prevState => ({balance: prevState.balance - sum < 0 ? prevState.balance : prevState.balance - sum}))
  }

  fetchQuote = async () => {
    const response = await fetch('https://api.gameofthronesquotes.xyz/v1/random')
    const data = await response.json()
    this.setState({quote: data.sentence})
  }

  render() {
    return (
      <div>
        <Balance balance={this.state.balance} quote={this.state.quote}/>
        <Operation withdraw={this.withdraw} deposit={this.deposit} fetchQuote={this.fetchQuote}/>
      </div>
    )
  }
}
