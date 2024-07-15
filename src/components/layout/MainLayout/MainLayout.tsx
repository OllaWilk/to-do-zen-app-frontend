import React from 'react';
import { Outlet } from 'react-router-dom';
import { useToggle } from '../../../utils/hooks/useToggle';
import {
  ButtonLogout,
  Footer,
  HamburgerNavigation,
  Logo,
  Navigation,
} from '../../common/index';
import styles from './MainLayout.module.scss';

const MainLayout = () => {
  const [isOpen, toggleIsOpen] = useToggle(true);

  return (
    <div className={styles.layoutWrapper}>
      <header
        className={
          !isOpen
            ? styles.navigation
            : `${styles.navigation} ${styles.toggleHorizontal}`
        }
      >
        <div className={styles.logoWrap}>
          <Logo
            text={'SpaceSteps'}
            fontSize='20px'
            imgSize={{ width: '40px', height: '40px' }}
          />
        </div>
        <Navigation />
        <HamburgerNavigation isOpen={isOpen} handleClick={toggleIsOpen} />
        <ButtonLogout />
      </header>
      <section className={styles.cockpit}>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export { MainLayout };
