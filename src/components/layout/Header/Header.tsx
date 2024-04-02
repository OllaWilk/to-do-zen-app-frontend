import React from 'react';
import parse from 'html-react-parser';
import { pageContents } from '../../../data/dataStore';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <>
      <h1 className={styles.header}>{parse(pageContents.title)}</h1>
      <p>{pageContents.subtitle}</p>
    </>
  );
};

export { Header };
