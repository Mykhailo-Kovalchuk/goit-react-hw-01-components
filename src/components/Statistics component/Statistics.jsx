// import React from 'react'

const Statistics = ({ title = "", stats }) => {

    const statElement = stats.map((el) => (
<li className="item" key={el.id}>
<span className="label">{el.label}</span>
<span className="percentage">{el.percentage}%</span>
</li>))


  return (
<section className="statistics">
  <h2 className="title">{title}</h2>
  <ul className="stat-list">
  {statElement}
  </ul>
  </section>
  )
}

export {Statistics};