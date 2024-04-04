import React from 'react';
import { Logo, Navigation } from '../../common/index';
import styles from './MainLayout.module.scss';

type MainLayout = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayout> = ({ children }) => {
  return (
    <>
      <header className={styles.navigation}>
        <Logo text={'SpaceSteps'} size='1.5rem' />
        <Navigation />
      </header>
      <section className={styles.cockpit}>{children}</section>
    </>
  );
};

export { MainLayout };
