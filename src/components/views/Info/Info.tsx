import React from 'react';
import { infoContent } from '../../../data/dataStore';
import spaceHAir from '../../../images/spaceHair.png';
import { Paragraph, SectionHeader } from '../../common/index';
import { MainLayout } from '../../layout/index';
import styles from './Info.module.scss';

const Info = () => {
  const { text } = infoContent;
  return (
    <MainLayout>
      <div className={styles.wrap}>
        <img src={spaceHAir} alt='woman in blue' />
        <article className={styles.info}>
          <SectionHeader text={infoContent.title} />
          <Paragraph text={text} />
        </article>
      </div>
    </MainLayout>
  );
};

export { Info };
