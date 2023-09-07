import React, { Component } from 'react'
import { store } from '../configureStore/store'

export default class Balance extends Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate())
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return (
      <div>
        <h1 className='text-center text-uppercase'>Iron Bank of Braavos</h1>
        <h3 className='text-center text-uppercase'>{this.props.quote}</h3>
        <h2 className='text-center text-uppercase'>Balance = {store.getState().balance}</h2>
      </div>
    )
  }
}
