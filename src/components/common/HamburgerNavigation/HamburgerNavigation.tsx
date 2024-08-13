import React from 'react';
import { HiMenu } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';

import styles from './HamburgerNavigation.module.scss';

interface Props {
  isOpen: boolean;
  handleClick: () => void;
}

const HamburgerNavigation = ({ isOpen, handleClick }: Props) => (
  <div className={styles.hamburgerComponent} onClick={handleClick}>
    {isOpen ? <HiMenu /> : <IoMdClose />}
  </div>
);

export { HamburgerNavigation };
