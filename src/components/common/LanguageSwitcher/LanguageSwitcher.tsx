import React from 'react';

import styles from './LanguageSwitcher.module.scss';

interface Props {
  lang: string;
  setLang: React.Dispatch<React.SetStateAction<string>>;
}

const LanguageSwitcher = ({ lang, setLang }: Props) => (
  <div className={styles.language}>
    <div
      className={lang === 'en' ? styles.flag : styles.active}
      onClick={() => setLang('pl')}
    >
      <span>PL</span>
    </div>
    <div
      className={lang === 'pl' ? styles.flag : styles.active}
      onClick={() => setLang('en')}
    >
      <span>EN</span>
    </div>
  </div>
);

export { LanguageSwitcher };
