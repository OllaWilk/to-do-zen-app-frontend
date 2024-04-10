import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TaskEntity } from 'types';
import { taskView } from '../../../data/dataStore';
import { ControlPanel, MainLayout } from '../../layout/index';
import { TaskForm, UserPanel } from '../../common/index';

const Task = () => {
  const [task, setTask] = useState<TaskEntity | null>(null);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:3001/tasks/${id}`);
      const data = await res.json();
      setTask(data);
    })();
  }, []);

  if (task === null) {
    return <p>Loading...</p>;
  }

  return (
    <MainLayout>
      <TaskForm taskData={task} />
      <ControlPanel>
        <UserPanel userName={taskView.userName} />
      </ControlPanel>
    </MainLayout>
  );
};

export { Task };
