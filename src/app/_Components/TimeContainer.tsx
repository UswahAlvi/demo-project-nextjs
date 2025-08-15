'use client'

import { useEffect, useState } from "react"

export default function TimeContainer() {
  const [hours, setHours] = useState(new Date().getHours())
  const [minutes, setMinutes] = useState(new Date().getMinutes())
  const [seconds, setSeconds] = useState(new Date().getSeconds())

  const padStartWithZero = (value: number) => {
    return value.toString().padStart(2, '0')
  }

  const updateTime = () => {
    setSeconds(prevSeconds => {
        if (prevSeconds + 1 === 60) {
          setMinutes(prevMinutes => {
            if (prevMinutes + 1 === 60) {
              setHours(prevHours => (prevHours + 1) % 24)
              return 0
            }
            return prevMinutes + 1
          })
          return 0
        }
        return prevSeconds + 1
      })
  }

  useEffect(() => {
    const interval = setInterval(() => updateTime(), 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const date = new Date()
    setHours(date.getHours())
    setMinutes(date.getMinutes())
    setSeconds(date.getSeconds())
  }, [])

  return (
    <div className="flex absolute bottom-[15px] left-[10px] sm:bottom-[50px] sm:left-[40px] text-[var(--paragraph)] font-bold text-[20px]"  suppressHydrationWarning={true}>
      {padStartWithZero(hours)} : {padStartWithZero(minutes)} : {padStartWithZero(seconds)}
    </div>
  )
}
