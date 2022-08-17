import styles from '../styles/CountDown.module.css'
import { useState, useEffect } from 'react'
import {getRemainingTimeUntilMsTimestamp} from './CountdownTimerUtils'

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const CountdownTimer = ({countdownTimestampMs}) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime)

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs)
    }, 1000)
    return () => clearInterval(intervalId)
  },[countdownTimestampMs])

  function updateRemainingTime (countdown){
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown))
  }

  return (
    <div className={styles.countdownTimer}>
      <div className={styles.containNum}>
        <span>{remainingTime.days}</span>
        <span>days</span>
      </div>
      <div className={styles.containNum}>
        <span className={styles.twoNumbers}>{remainingTime.hours}</span>
        <span>hours</span>
      </div>
      <div className={styles.containNum}>
        <span className={styles.twoNumbers}>{remainingTime.minutes}</span>
        <span>minutes</span>
      </div>
      <div className={styles.containNum}>
        <span className={styles.twoNumbers}>{remainingTime.seconds}</span>
        <span>seconds</span>
      </div>
    </div>
  )
}

export default CountdownTimer