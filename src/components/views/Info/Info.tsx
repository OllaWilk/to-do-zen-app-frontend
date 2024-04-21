import React from 'react';
import { info } from '../../../data/pages/info';
import spaceHAir from '../../../images/spaceHair.png';
import { Paragraph, SectionHeader } from '../../common/index';
import { MainLayout } from '../../layout/index';
import styles from './Info.module.scss';

const Info = () => {
  const { header, description } = info;
  return (
    <MainLayout>
      <div className={styles.wrap}>
        <img src={spaceHAir} alt='woman in blue' />
        <article className={styles.info}>
          <SectionHeader text={header} />
          <Paragraph text={description} />
        </article>
      </div>
    </MainLayout>
  );
};

export { Info };
