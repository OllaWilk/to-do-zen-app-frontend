import React from 'react';
import { home } from '../../../data/pages/home';
import { Tasks, List } from '../../feature';
import { SectionCart, SectionHeader } from '../../common';

const Home = () => {
  const { header } = home;

  return (
    <>
      <SectionCart>
        <SectionHeader text={'Canban'} />
        <List />
      </SectionCart>
      <SectionCart>
        <SectionHeader text={header} />
        <Tasks />
      </SectionCart>
    </>
  );
};

export { Home };
