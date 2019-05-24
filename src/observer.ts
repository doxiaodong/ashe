import { memo, FunctionComponent } from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import useObserver from './useObserver'

export default function observer<P>(baseComponent: FunctionComponent<P>) {
  const wrappedComponent: FunctionComponent<P> = props => {
    return useObserver(() => baseComponent(props))
  }

  const memoComponent = memo(wrappedComponent)

  hoistNonReactStatics(memoComponent, baseComponent)

  memoComponent.displayName = baseComponent.displayName

  return memoComponent
}
