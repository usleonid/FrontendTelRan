import React, { Component } from 'react'

export default class Balance extends Component {
  render() {
    return (
      <div>
        <h1 className='text-center text-uppercase'>Iron Bank of Braavos</h1>
        <h3 className='text-center text-uppercase'>{this.props.quote}</h3>
        <h2 className='text-center text-uppercase'>Balance = {this.props.balance}</h2>
      </div>
    )
  }
}
