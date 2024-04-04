import React from 'react';
import { MainLayout } from 'src/components/layout';
import styles from './ControlPanel.module.scss';

type ControlPanel = {
  children: React.ReactNode;
};

const ControlPanel: React.FC<MainLayout> = ({ children }) => {
  return <div className={styles.controlPanel}>{children}</div>;
};

export { ControlPanel };
