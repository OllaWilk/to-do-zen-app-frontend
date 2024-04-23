import React from 'react';
import { useToggle } from '../../../utils/hooks/useToggle';
import { home } from '../../../data/pages/home';

import {
  HamburgerNavigation,
  Logo,
  Navigation,
  UserPanel,
} from '../../common/index';
import styles from './MainLayout.module.scss';

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isOpen, toggleIsOpen] = useToggle(true);

  return (
    <>
      <UserPanel userName={home.user} />
      <header
        className={
          !isOpen
            ? styles.navigation
            : `${styles.navigation} ${styles.toggleHorizontal}`
        }
      >
        <Logo text={'SpaceSteps'} size='20px' />
        <Navigation />
        <HamburgerNavigation isOpen={isOpen} handleClick={toggleIsOpen} />
      </header>
      <section className={styles.cockpit}>{children}</section>
    </>
  );
};

export { MainLayout };
