import React from 'react';
import { home } from '../../../data/pages/home';
import { MainLayout, ControlPanel } from '../../layout';
import {
  SectionCart,
  SectionHeader,
  UserPanel,
  TaskForm,
  TasksList,
} from '../../common';

const Home = () => {
  const { header, user } = home;
  return (
    <MainLayout>
      <SectionCart>
        <SectionHeader text={header} />
        <TasksList />
        <ControlPanel>
          <UserPanel userName={user} />
          <TaskForm />
        </ControlPanel>
      </SectionCart>
    </MainLayout>
  );
};

export { Home };
