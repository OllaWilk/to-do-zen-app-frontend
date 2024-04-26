import React from 'react';
import styles from './NoDataAlert.module.scss';

const NoDataAlert = () => {
  return (
    <div className={styles.noDataAlert}>
      <img
        src='https://media.tenor.com/nEP6ovplEd8AAAAi/so-really.gif'
        alt='no data Travolta'
      />
      <h2>Sorry no data</h2>
    </div>
  );
};

export { NoDataAlert };
