import React from 'react';
import styles from './ControlPanel.module.scss';

type Props = {
  children: React.ReactNode;
};

const ControlPanel = ({ children }: Props) => {
  return (
    <>
      <div className={`${styles.controlPanel} ${styles.toggleHorizontal}`}>
        {children}
      </div>
    </>
  );
};

export { ControlPanel };
