import React from 'react';
import { GoSidebarExpand, GoSidebarCollapse } from 'react-icons/go';
import { useToggle } from '../../../utils/hooks/useToggle';
import styles from './ControlPanel.module.scss';

type ControlPanelProps = {
  children: React.ReactNode;
};

const ControlPanel: React.FC<ControlPanelProps> = ({ children }) => {
  const [isOpen, toggleIsOpen] = useToggle(true);

  return (
    <>
      <div
        className={
          !isOpen
            ? styles.controlPanel
            : `${styles.controlPanel} ${styles.toggleHorizontal}`
        }
      >
        {children}
      </div>

      <div className={styles.buttonAdd} onClick={toggleIsOpen}>
        {isOpen ? <GoSidebarExpand /> : <GoSidebarCollapse />}
      </div>
    </>
  );
};

export { ControlPanel };
