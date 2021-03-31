import React from 'react';

import styles from './statistics.module.scss';
const statsItemRender = oneStatData => {
  return (
    <li key={oneStatData.id} className={styles.item}>
      <span className="label">{oneStatData.label}</span>
      <span className="percentage">{oneStatData.percentage}</span>
    </li>
  );
};
const Statistics = ({ statsData }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>Upload stats</h2>
      <ul className={styles.statList}>{statsData.map(statsItemRender)}</ul>
    </section>
  );
};
export default Statistics;
