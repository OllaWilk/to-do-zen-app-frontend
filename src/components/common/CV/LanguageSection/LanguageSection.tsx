import React from 'react';
import styles from './LanguageSection.module.scss';

const LanguageSection = () => (
  <div className={styles.language}>
    <p className={styles.text}>Languages:</p>
    <p>Polish - Native</p>
    <p>English - B2</p>
  </div>
);

export { LanguageSection };
