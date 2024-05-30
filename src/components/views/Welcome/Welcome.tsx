import React from 'react';
import { useAuthContext } from '../../../utils/hooks';
import {
  Logo,
  Paragraph,
  AnimatedAstronaut,
  ButtonBlack,
} from '../../common/index';
import styles from './Welcome.module.scss';

const Welcome = () => {
  const { user } = useAuthContext();

  return (
    <section className={`${styles.welcome} `}>
      <article>
        <Logo text={'SpaceSteps'} />
        <Paragraph
          text={
            'Discover the power of small steps leading to great achievements. With SpaceSteps, your daily to-do list and habits aren’t just tasks – they’re your journey through a universe of possibilities. Start creating, organizing, and tracking your goals today. Master your universe, one step at a time. Share and plan your time with friends to make every moment of your journey more satisfying and full of unforgettable memories.'
          }
        />
        <div className={styles.btns}>
          {!user ? (
            <>
              <ButtonBlack dynamicPath={'signup'} buttonName={'Signup'} />
              <ButtonBlack dynamicPath={'login'} buttonName={'Login'} />
            </>
          ) : (
            <ButtonBlack
              dynamicPath={'cockpit'}
              buttonName={'Launch to Cockpit'}
            />
          )}
        </div>
      </article>
      <AnimatedAstronaut />
    </section>
  );
};

export { Welcome };
