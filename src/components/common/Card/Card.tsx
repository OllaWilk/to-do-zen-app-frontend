import React from 'react';
import styles from './Card.module.scss';

interface Props {
  cardData: {
    id: string;
    title: string;
  };
}
const Card = ({ cardData }: Props) => {
  return (
    <div className={styles.component} key={cardData.id}>
      <h3 className={styles.title}> {cardData.title}</h3>
      <span className={styles.title}>X</span>
    </div>
  );
};

export { Card };
