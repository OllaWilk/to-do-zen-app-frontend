import React from 'react';
import { tasksViewContent } from '../../../data/dataStore';
import { MainLayout, TasksList, ControlPanel } from '../../layout';
import { UserPanel, TaskForm, SectionHeader } from '../../common';

const Tasks = () => {
  return (
    <MainLayout>
      <SectionHeader text={tasksViewContent.taskHeader} />
      <TasksList />
      <ControlPanel>
        <UserPanel userName={tasksViewContent.userName} />
        <TaskForm />
      </ControlPanel>
    </MainLayout>
  );
};

export { Tasks };
