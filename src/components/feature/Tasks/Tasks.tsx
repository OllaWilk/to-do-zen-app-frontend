import React from 'react';
import { TaskForm, TasksList } from '../../common/index';
import { ControlPanel } from '../../layout/index';

const Tasks = () => {
  return (
    <>
      <TasksList />
      <ControlPanel>
        <TaskForm />
      </ControlPanel>
    </>
  );
};

export { Tasks };
