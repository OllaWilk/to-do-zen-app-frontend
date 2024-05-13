import React from 'react';
import { home } from '../../../data/pages/home';
import { ControlPanel } from '../../layout';
import { SectionCart, SectionHeader, TaskForm, TasksList } from '../../common';

const Home = () => {
  const { header } = home;

  return (
    <SectionCart>
      <SectionHeader text={header} />
      <TasksList />
      <ControlPanel>
        <TaskForm />
      </ControlPanel>
    </SectionCart>
  );
};

export { Home };
