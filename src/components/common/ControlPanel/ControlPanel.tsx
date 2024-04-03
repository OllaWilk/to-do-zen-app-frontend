import React from 'react';
import styles from './ControlPanel.module.scss';
import { MainLayout } from 'src/components/layout';

type ControlPanel = {
  children: React.ReactNode;
};

const ControlPanel: React.FC<MainLayout> = ({ children }) => {
  return <div className={styles.controlPanel}>{children}</div>;
};

export { ControlPanel };
