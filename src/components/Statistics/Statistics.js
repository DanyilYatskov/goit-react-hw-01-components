import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import StatisticsItem from './StatisticsItem';
import styles from './statistics.module.scss';

const Statistics = ({ statsData }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>Upload stats</h2>
      <ul className={styles.statList}>
        {statsData.map(statData => (
          <StatisticsItem
            key={statData.id}
            label={statData.label}
            percentage={statData.percentage}
          />
        ))}
      </ul>
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  statsData: arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
