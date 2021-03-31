import React from 'react';
import statsData from './statistical-data.json';
import styles from './statistics.module.scss';
const StatsItem = oneStatData => {
  return (
    <li key={oneStatData.id} className={styles.item}>
      <span className="label">{oneStatData.label}</span>
      <span className="percentage">{oneStatData.percentage}</span>
    </li>
  );
};
const Statistics = () => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>Upload stats</h2>
      <ul className={styles.statList}>{statsData.map(StatsItem)}</ul>
    </section>
  );
};
export default Statistics;
