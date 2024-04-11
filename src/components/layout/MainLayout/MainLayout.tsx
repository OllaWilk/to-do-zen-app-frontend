import React, { useState } from 'react';
import { useToggle } from '../../../utils/hooks/useToggle';
import { HamburgerNavigation, Logo, Navigation } from '../../common/index';
import styles from './MainLayout.module.scss';

type MainLayout = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayout> = ({ children }) => {
  const [isOpen, toggleIsOpen] = useToggle(true);

  return (
    <>
      <header className={styles.navigation}>
        <Logo text={'SpaceSteps'} size='20px' />
        <Navigation />
        <div onClick={toggleIsOpen}>
          <HamburgerNavigation isOpen={isOpen} />
        </div>
      </header>
      <section className={styles.cockpit}>{children}</section>
    </>
  );
};

export { MainLayout };
