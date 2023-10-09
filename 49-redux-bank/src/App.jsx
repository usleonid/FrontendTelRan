import React, { Component } from 'react'
import './App.css'
import Balance from './components/Balance'
import Operation from './components/Operation'


export default class App extends Component {

  render() {
    return (
      <div>
        <Balance />
        <Operation />
      </div>
    )
  }
}
