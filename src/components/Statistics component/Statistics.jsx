// import React from 'react'
import css from './Statistics.module.css'

const Statistics = ({ title = "", stats }) => {

    const statElement = stats.map((el) => (
<li className={css.item} key={el.id}>
<span className={css.label}>{el.label}</span>
<span className={css.percentage}>{el.percentage}%</span>
</li>))


  return (
<section className={css.statistics}>
  <h2 className={css.title}>{title}</h2>
  <ul className={css.statlist}>
  {statElement}
  </ul>
  </section>
  )
}

export {Statistics};