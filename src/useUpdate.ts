import { useState, useCallback } from 'react'

export default function useUpdate() {
  const set = useState(0)[1]
  const forceUpdate = useCallback(() => {
    set(t => t + 1)
  }, [])

  return forceUpdate
}
