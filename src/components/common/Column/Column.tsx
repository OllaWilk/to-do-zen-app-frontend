import React from 'react';
import { Card, Creator } from '../index';
import styles from './Column.module.scss';
import { FaIcons } from 'react-icons/fa';

interface Props {
  columnData: {
    id: string;
    listId: string;
    title: string;
    icon: string;
  };
}
const Column = ({ columnData }: Props) => {
  const cards = [
    {
      id: 'card-1',
      columnId: 'column-1',
      title: 'This Is Going to Hurt',
    },
    {
      id: 'card-2',
      columnId: 'column-1',
      title: 'Interpreter of Maladies',
    },
    {
      id: 'card-3',
      columnId: 'column-2',
      title: 'Harry Potter',
    },
    {
      id: 'card-4',
      columnId: 'column-2',
      title: 'Star Wars',
    },
    {
      id: 'card-5',
      columnId: 'column-3',
      title: 'The Witcher',
    },
  ];
  return (
    <section className={styles.component} key={columnData.id}>
      <div className={styles.cartImage}>
        <FaIcons />
        <h3 className={styles.title}>
          {columnData.title}
          <span className={styles.icon}>
            <i className={`fas fa-cat}`}></i>
          </span>
        </h3>
      </div>
      <div className={styles.card}>
        {cards.map((cardData) => (
          <Card key={cardData.id} cardData={cardData} />
        ))}
      </div>
      <div className={styles.creator}>
        <Creator text={'add new item'} />
      </div>
    </section>
  );
};

export { Column };
