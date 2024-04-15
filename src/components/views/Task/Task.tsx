import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TaskEntity } from 'types';
import { taskView } from '../../../data/dataStore';
import { ControlPanel, MainLayout } from '../../layout/index';
import { NotFound } from '../NotFound/NotFound';
import { TaskForm, UserPanel } from '../../common/index';
import styles from './Task.module.scss';

const Task = () => {
  const [task, setTask] = useState<TaskEntity | null>(null);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:3001/tasks/${id}`);
      const data = await res.json();
      setTask(data);
    })();
  }, [id]);

  if (task === null) {
    return <p>Loading...</p>;
  }

  const taskContent =
    task.id === id ? (
      <div>{task.id}</div>
    ) : (
      <NotFound message={taskView.noTask} />
    );
  return (
    <MainLayout>
      <section className={styles.taskInfoWrap}>{taskContent}</section>
      {task.id === id && (
        <ControlPanel>
          <UserPanel userName={taskView.userName} />
          <TaskForm taskData={task} />
        </ControlPanel>
      )}
    </MainLayout>
  );
};

export { Task };
