import * as React from 'react'
import { observer } from '../src'
import x from './store'

const Example1: React.FunctionComponent = props => {
  const b = x.a + 1

  return (
    <>
      <p>hahaha{b}</p>
      <button onClick={x.plus}>++</button>
    </>
  )
}

Example1.displayName = 'Example1'

export default observer(Example1)
