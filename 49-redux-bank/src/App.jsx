import React, { Component } from 'react'
import './App.css'
import Balance from './components/Balance'
import Operation from './components/Operation'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: 'Winter is coming...'
    }
  }

  fetchQuote = async () => {
    const response = await fetch('https://api.gameofthronesquotes.xyz/v1/random')
    const data = await response.json()
    this.setState({quote: data.sentence})
  }

  render() {
    return (
      <div>
        <Balance quote={this.state.quote}/>
        <Operation fetchQuote={this.fetchQuote}/>
      </div>
    )
  }
}
