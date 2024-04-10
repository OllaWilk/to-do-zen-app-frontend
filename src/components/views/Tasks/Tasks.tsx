import React from 'react';
import { tasksViewContent } from '../../../data/dataStore';
import { MainLayout, TasksList, ControlPanel } from '../../layout';
import { UserPanel, TaskForm } from '../../common';

const Tasks = () => {
  return (
    <MainLayout>
      <TasksList />
      <ControlPanel>
        <UserPanel userName={tasksViewContent.userName} />
        <TaskForm />
      </ControlPanel>
    </MainLayout>
  );
};

export { Tasks };
