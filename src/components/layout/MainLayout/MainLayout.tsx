import React from 'react';
import styles from './MainLayout.module.scss';

type MainLayout = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayout> = ({ children }) => {
  return (
    <>
      <header className={styles.navigation}> Nawigation</header>
      <article className={styles.cockpit}>{children}</article>
    </>
  );
};

export { MainLayout };
