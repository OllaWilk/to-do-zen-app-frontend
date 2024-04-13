import React from 'react';
import styles from './ControlPanel.module.scss';

type ControlPanelProps = {
  children: React.ReactNode;
};

const ControlPanel: React.FC<ControlPanelProps> = ({ children }) => {
  return <div className={styles.controlPanel}>{children}</div>;
};

export { ControlPanel };
