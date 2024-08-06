import React from 'react';
import { useToggle } from '../../../utils/hooks';
import styles from './ExpandableSection.module.scss';

interface ExpandableSectionProps {
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

const ExpandableSection = ({ icon, children }: ExpandableSectionProps) => {
  const [isOpen, toggleIsOpen] = useToggle(false);

  return (
    <div className={styles.expandableSection}>
      <div className={styles.icon} onClick={toggleIsOpen}>
        {icon}
      </div>
      {isOpen && children && <div className={styles.content}>{children}</div>}
    </div>
  );
};

export { ExpandableSection };
