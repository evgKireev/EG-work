import React from 'react'
import { useEffect, useState } from 'react'
import El from '../../assets/El'
import styles from './Time.module.scss'

export default React.memo(function Time() {
  const date = Number(new Date('May 31 2023 00:00:00'))
  const [timeDays, setTimeDays] = useState(0)
  const [timeHours, setTimeHours] = useState(0)
  const [timeMinutes, setTimeMinutes] = useState(0)
  const [timeSeconds, setTimeSeconds] = useState(0)
  const widthWindow = window.innerWidth
  const counts = () => {
    let now = Number(new Date())
    let gap = date - now
    let days = Math.floor(gap / 1000 / 60 / 60 / 24)
    let hours = Math.floor(gap / 1000 / 60 / 60) % 24
    let minutes = Math.floor(gap / 1000 / 60) % 24
    let sec = Math.floor(gap / 1000) % 60
    if (gap < 0) {
      days = days + 7
      hours = hours + 24
      minutes = minutes + 60
      sec = sec + 60
    }
    setTimeDays(days)
    setTimeHours(hours)
    setTimeMinutes(minutes)
    setTimeSeconds(sec)
  }
  useEffect(() => {
    setInterval(() => {
      counts()
    }, 1000)
  }, [])
  useEffect(() => {}, [widthWindow])
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.number}>
          {timeDays < 10 ? `0${timeDays}` : timeDays}
        </div>
        <div className={styles.text}>{widthWindow > 960 ? 'Days' : 'DD'}</div>
      </div>
      <span>:</span>
      <div className={styles.inner}>
        <div className={styles.number}>
          {timeHours < 10 ? `0${timeHours}` : timeHours}
        </div>
        <div className={styles.text}>{widthWindow > 960 ? 'Hours' : 'HH'}</div>
      </div>
      <span>:</span>
      <div className={styles.inner}>
        <div className={styles.number}>
          {timeMinutes < 10 ? `0${timeMinutes}` : timeMinutes}
        </div>
        <div className={styles.text}>
          {widthWindow > 960 ? 'Minutes' : 'MM'}
        </div>
      </div>
      <span>:</span>
      <div className={styles.inner}>
        <div className={styles.number}>
          {timeSeconds < 10 ? `0${timeSeconds}` : timeSeconds}
        </div>
        <div className={styles.text}>
          {widthWindow > 960 ? 'Seconds' : 'SS'}
        </div>
      </div>
    </div>
  )
})
