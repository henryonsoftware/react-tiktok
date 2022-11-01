import { useState, useEffect, useMemo } from 'react'

const useElementOnScreen = (options, targetRef) => {
  const [isVisible, setIsVisible] = useState()

  const callbackFunc = (entries) => {
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
  }

  const optionMemo = useMemo(() => {
    return options
  }, [options])

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunc, optionMemo)
    const currentTarget = targetRef.current
    if (currentTarget) {
      observer.observe(currentTarget)
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget)
      }
    }
  }, [optionMemo, targetRef])

  return isVisible
}

export default useElementOnScreen
