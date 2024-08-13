import React from 'react';
import styles from './ControlPanel.module.scss';

type Props = {
  children: React.ReactNode;
};

const ControlPanel = ({ children }: Props) => (
  <div className={`${styles.controlPanel} `}>{children}</div>
);

export { ControlPanel };
