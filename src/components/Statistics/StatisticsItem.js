import React from 'react';
import styles from './statistics.module.scss';
const StatisticsItem = ({ statData }) => {
  return (
    <>
      <li className={styles.item}>
        <span className={styles.label}>{statData.label}</span>
        <span className={styles.percentage}>{statData.percentage}</span>
      </li>
    </>
  );
};
export default StatisticsItem;
