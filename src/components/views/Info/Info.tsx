import React, { useState } from 'react';
import { info, infoPl } from '../../../data/info';
import myAsistant from '../../../images/asistant.png';

import {
  CartWithParagraphs,
  NavigationCartDots,
  LanguageSwitcher,
} from '../../common/index';
import styles from './Info.module.scss';

const Info = () => {
  const [lang, setLang] = useState<string>('en');
  const [currentCard, setCurrentCard] = useState<number>(0);

  const carts = lang === 'en' ? info : infoPl;
  const cartsNumb = carts.length;

  const handleNext = () => {
    setCurrentCard((prev) => (prev + 1) % cartsNumb);
  };

  const handlePrev = () => {
    setCurrentCard((prev) => (prev - 1 + cartsNumb) % cartsNumb);
  };

  return (
    <div className={styles.infoComponent}>
      <div className={styles.imgWrap}>
        <img className={styles.mainImg} src={myAsistant} alt='asistant' />
      </div>
      <article className={styles.info}>
        {carts.map((cart, index) => (
          <CartWithParagraphs
            key={index}
            cart={cart}
            isVisible={index === currentCard}
          />
        ))}
        <LanguageSwitcher lang={lang} setLang={setLang} />
      </article>
      <NavigationCartDots
        currentCard={currentCard}
        cartsNumb={cartsNumb}
        handleNext={handleNext}
        handlePrev={handlePrev}
        setCurrentCard={setCurrentCard}
      />
    </div>
  );
};

export { Info };
