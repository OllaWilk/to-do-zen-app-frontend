import React from 'react';
import { Column, Creator } from '../../common/index';
import styles from './List.module.scss';

const List = () => {
  const columns = [
    {
      id: 'column-1',
      listId: 'list-1',
      title: 'Books',
      icon: 'book',
    },
    {
      id: 'column-2',
      listId: 'list-1',
      title: 'Movies',
      icon: 'film',
    },
    {
      id: 'column-3',
      listId: 'list-1',
      title: 'Games',
      icon: 'gamepad',
    },
    {
      id: 'column-3',
      listId: 'list-1',
      title: 'Quotes',
      icon: 'gamepad',
    },
  ];

  return (
    <>
      <div className={styles.columns}>
        {columns.map((columnData) => (
          <Column key={columnData.id} columnData={columnData} />
        ))}
      </div>
      <div className={styles.creator}>
        <Creator text={'Add new item'} />
      </div>
    </>
  );
};

export { List };
