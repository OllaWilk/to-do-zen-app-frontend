import React from 'react';
import styles from './NoDataAlert.module.scss';

interface Props {
  message: string;
}

const NoDataAlert = ({ message }: Props) => {
  return (
    <div className={styles.noDataAlert}>
      <img
        src='https://media.tenor.com/nEP6ovplEd8AAAAi/so-really.gif'
        alt='no data Travolta'
      />
      <h2>{message}</h2>
    </div>
  );
};

export { NoDataAlert };
