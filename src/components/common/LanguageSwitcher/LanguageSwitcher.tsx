import React from 'react';
import plFlag from '../../../images/poland-flag.png';
import enFlag from '../../../images/usa-flag.png';
import styles from './LanguageSwitcher.module.scss';

interface Props {
  lang: string;
  setLang: React.Dispatch<React.SetStateAction<string>>;
}

const LanguageSwitcher = ({ lang, setLang }: Props) => {
  return (
    <div className={styles.language}>
      <div
        className={lang === 'en' ? styles.flag : styles.active}
        onClick={() => setLang('pl')}
      >
        <img src={plFlag} alt='polish flag' />
      </div>
      <div
        className={lang === 'pl' ? styles.flag : styles.active}
        onClick={() => setLang('en')}
      >
        <img src={enFlag} alt='usa flag' />
      </div>
    </div>
  );
};

export { LanguageSwitcher };
