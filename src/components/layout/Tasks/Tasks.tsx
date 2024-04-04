import React from 'react';
import { tasksContent } from '../../../data/dataStore';
import { MainLayout, TasksList, ControlPanel } from '../../layout';
import { UserPanel, TaskForm } from '../../common';

const Tasks = () => {
  return (
    <MainLayout>
      <TasksList />
      <ControlPanel>
        <UserPanel userName={tasksContent.userName} />
        <TaskForm />
      </ControlPanel>
    </MainLayout>
  );
};

export { Tasks };
