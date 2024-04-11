import React from 'react';
import { HiMenu } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';

import styles from './HamburgerNavigation.module.scss';

interface Props {
  isOpen: boolean;
}

const HamburgerNavigation = ({ isOpen }: Props) => {
  return (
    <div className={styles.hamburgerComponent}>
      {isOpen ? <HiMenu /> : <IoMdClose />}
    </div>
  );
};

export { HamburgerNavigation };
