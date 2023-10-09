import React from 'react'
import { withBackGround } from '../hoc/withBackGround'

const Button = (props) => {
  return (
    <div>
        <button onClick={() => alert('Hello World!')}>Click me!</button>
    </div>
  )
}

export default withBackGround(Button)