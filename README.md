[![CircleCI](https://img.shields.io/circleci/project/github/doxiaodong/ashe.svg?style=flat-square)](https://circleci.com/gh/doxiaodong/ashe)
[![Version](https://img.shields.io/npm/v/@dxd/ashe.svg?style=flat-square)](https://www.npmjs.com/package/@dxd/ashe)
[![License](https://img.shields.io/npm/l/@dxd/ashe.svg?style=flat-square)]()

## Ashe

Package with React component with hooks(as useState, useEffect, ...) wrapper for combining React with MobX. For documentation, see the MobX project. The package supports react with hooks only

## Usage

- `npm i @dxd/ashe`

- store

```typescript
import { observable, action } from 'mobx'

class Store {
  @observable a = 1

  @action.bound plus() {
    this.a += 1
  }
}

export default new Store()
```

- Component

typescript

```typescript
import * as React from 'react'
import { observer } from '../@dxd/ashe'
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
```

## Advance

- You can find a DI in examples/store, which make stores testable
