import React from 'react';
import styles from './statistics.module.scss';
const StatisticsItem = ({ label, percentage }) => {
  return (
    <>
      <li className={styles.item}>
        <span className={styles.label}>{label}</span>
        <span className={styles.percentage}>{percentage}</span>
      </li>
    </>
  );
};
export default StatisticsItem;
