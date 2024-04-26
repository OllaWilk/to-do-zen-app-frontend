import React from 'react';
import { home } from '../../../data/pages/home';
import { MainLayout, ControlPanel } from '../../layout';
import { SectionCart, SectionHeader, TaskForm, TasksList } from '../../common';

const Home = () => {
  const { header } = home;
  return (
    <MainLayout>
      <SectionCart>
        <SectionHeader text={header} />
        <TasksList />
        <ControlPanel>
          <TaskForm />
        </ControlPanel>
      </SectionCart>
    </MainLayout>
  );
};

export { Home };
