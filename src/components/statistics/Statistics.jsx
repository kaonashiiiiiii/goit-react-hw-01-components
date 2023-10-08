import React from 'react'
import statisticsStyles from './statistics.module.css'

const Statistics = (props) => {
  const { title, stats } = props
  const generateRandomColor = (item) => {
    const valuePercentage = item.percentage
    const validValue = Math.max(0, Math.min(100, valuePercentage))
    const hue = (validValue / 100) * 360
    const saturation = Math.floor(Math.random() * (100 - 50 + 1) + 50)
    const lightness = Math.floor(Math.random() * (70 - 30 + 1) + 30)
    const hslColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`

    return hslColor
  }
  return (
    <section className={statisticsStyles.statistics}>
      {title && <h2 className={statisticsStyles.title}>{title}</h2>}

      <ul className={statisticsStyles.statlist}>
        {stats.map((item) => {
          return (
            <li
              key={item.label}
              className={statisticsStyles.item}
              style={{ backgroundColor: generateRandomColor(item) }}
            >
              <span className={statisticsStyles.label}>{item.label}</span>
              <span className={statisticsStyles.percentage}>
                {item.percentage}%
              </span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Statistics
