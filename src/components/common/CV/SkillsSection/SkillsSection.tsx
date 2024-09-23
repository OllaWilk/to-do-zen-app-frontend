import React from 'react';
import { Technologies } from '../../../common';
import styles from './SkillsSection.module.scss';

type Skill = {
  icon: JSX.Element;
  name: string;
};

type SkillsProps = {
  skills: Record<string, Skill[]>;
};

const SkillsSection: React.FC<SkillsProps> = ({ skills }) => (
  <div>
    {Object.entries(skills).map(([key, value]) => (
      <div key={key} className={styles.skillWrap}>
        <p className={styles.text}>
          {key.charAt(0).toUpperCase() + key.slice(1)}:
        </p>
        <Technologies technologies={value} />
      </div>
    ))}
  </div>
);

export { SkillsSection };
