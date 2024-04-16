import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TaskEntity } from 'types';
import { taskView } from '../../../data/dataStore';
import backgrounImg from '../../../images/space.png';
import { ControlPanel, MainLayout } from '../../layout/index';
import { NotFound } from '../NotFound/NotFound';
import {
  Paragraph,
  SectionHeader,
  TaskForm,
  UserPanel,
} from '../../common/index';
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

  return (
    <MainLayout>
      {task.id === id ? (
        <div className={styles.task}>
          <div className={styles.imgWrap}>
            <img src={backgrounImg} alt='woman in space' />
          </div>
          <SectionHeader text={task.title} />
          <Paragraph text={`${task.description}`} />
          <p className={styles.taskLabel}>
            {taskView.cathegoryLabel} <span>{task.category}</span>
          </p>
          <p className={styles.taskLabel}>
            {taskView.priorityLabel}
            <span>{task.priority}</span>
          </p>
        </div>
      ) : (
        <NotFound message={taskView.noTask} />
      )}
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
