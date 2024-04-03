import React from 'react';
import { MainLayout } from '../../layout';
import { TasksList } from './TasksList/TasksList';
import { ControlPanel, UserPanel, TaskForm } from '../../common';
import styles from './Tasks.module.scss';

const Tasks = () => {
  return (
    <MainLayout>
      <TasksList />
      <ControlPanel>
        <UserPanel />
        <TaskForm />
      </ControlPanel>
    </MainLayout>
  );
};

export { Tasks };
