import React from 'react';
import StatisticsItem from './StatisticsItem';
import styles from './statistics.module.scss';

const Statistics = ({ statsData }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>Upload stats</h2>
      <ul className={styles.statList}>
        {statsData.map(statData => (
          <StatisticsItem key={statData.id} statData={statData} />
        ))}
      </ul>
    </section>
  );
};
export default Statistics;
