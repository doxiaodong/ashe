import * as React from 'react'
import { useObserver } from '../src'
import x from './store'

const Example2: React.FunctionComponent = props => {
  const b = x.a + 1

  return useObserver(() => (
    <>
      <p>
        hahaha{b}+{x.a}
      </p>
      <button onClick={x.plus}>++</button>
    </>
  ))
}

Example2.displayName = 'Example2'

export default Example2
