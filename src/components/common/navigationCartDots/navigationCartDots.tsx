import React from 'react';
import styles from './navigationCartDots.module.scss';

interface Props {
  currentCard: number;
  cartsNumb: number;
  handleNext: () => void;
  handlePrev: () => void;
  setCurrentCard: React.Dispatch<React.SetStateAction<number>>;
}

const NavigationCartDots = ({
  currentCard,
  cartsNumb,
  handleNext,
  handlePrev,
  setCurrentCard,
}: Props) => {
  return (
    <div className={styles.slideNav}>
      <div className={styles.navigationSlide} onClick={handlePrev}>
        prev ---
      </div>
      <div className={styles.dots}>
        {Array.from({ length: cartsNumb }).map((_, index) => (
          <p
            key={index}
            className={index === currentCard ? styles.activeDot : styles.dot}
            onClick={() => setCurrentCard(index)}
          >
            {index}
          </p>
        ))}
      </div>
      <div className={styles.navigationSlide} onClick={handleNext}>
        --- next
      </div>
    </div>
  );
};

export { NavigationCartDots };
