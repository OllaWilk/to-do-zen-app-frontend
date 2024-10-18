import React from 'react';
import { useAuthContext } from '../../../utils/hooks';
import {
  Logo,
  Paragraph,
  AnimatedAstronaut,
  ButtonBlack,
  Footer,
} from '../../common/index';
import styles from './Welcome.module.scss';

const Welcome = () => {
  // Retrieve the authenticated user from context
  const { user } = useAuthContext();

  return (
    <>
      <section className={`${styles.welcome} `}>
        <article>
          <Logo text={'SplotApp'} />
          <Paragraph
            text={
              'Discover harmony in your daily life with SplotApp. In a world full of distractions and fleeting digital connections, SplotApp helps you reconnect with what truly matters – your time, your habits, and your relationships. Each task isn’t just another checkbox – it’s a step toward a more balanced, meaningful life.'
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
      <Footer />
    </>
  );
};

export { Welcome };
