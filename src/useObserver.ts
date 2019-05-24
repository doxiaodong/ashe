import { useRef, useEffect } from 'react'
import { Reaction } from 'mobx'
import useUpdate from './useUpdate'

function useObserver<T>(fn: () => T): T {
  const reaction = useRef<Reaction>(null)
  const forceUpdate = useUpdate()
  if (!reaction.current) {
    reaction.current = new Reaction('[ashe]: observed component', () => {
      forceUpdate()
    })
  }

  const dispose = () => {
    if (reaction.current && !reaction.current.isDisposed) {
      reaction.current.dispose()
    }
  }

  useEffect(() => {
    return dispose
  }, [])

  let rendering: T
  let exception

  reaction.current.track(() => {
    try {
      // 依赖搜集
      rendering = fn()
    } catch (e) {
      exception = e
    }
  })

  if (exception) {
    dispose()
    throw exception
  }

  return rendering
}

export default useObserver
