// import React from 'react'
import css from './Statistics.module.css';

const Statistics = ({ title = '', stats }) => {
  const statElement = stats.map(el => (
    <li
      className={css.item}
      key={el.id}
      style={{ backgroundColor: '#' + randomColor() }}
    >
      <span className={css.label}>{el.label}</span>
      <span className={css.percentage}>{el.percentage}%</span>
    </li>
  ));

  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statlist}>{statElement}</ul>
    </section>
  );
};

export { Statistics };

function randomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}
