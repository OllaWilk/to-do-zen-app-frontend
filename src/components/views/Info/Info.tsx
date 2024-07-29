import React, { useState } from 'react';
import { infoEn, infoPl } from '../../../data/index';
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

  const carts = lang === 'en' ? infoEn : infoPl;
  const cartsNumb = carts.length;

  const handleNext = () => {
    setCurrentCard((prev) => (prev + 1) % cartsNumb);
  };

  const handlePrev = () => {
    setCurrentCard((prev) => (prev - 1 + cartsNumb) % cartsNumb);
  };

  return (
    <div className={styles.infoComponent}>
      <LanguageSwitcher lang={lang} setLang={setLang} />

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
        <NavigationCartDots
          currentCard={currentCard}
          cartsNumb={cartsNumb}
          handleNext={handleNext}
          handlePrev={handlePrev}
          setCurrentCard={setCurrentCard}
        />
      </article>
    </div>
  );
};

export { Info };
