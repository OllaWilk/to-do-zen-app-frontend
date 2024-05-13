import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TaskEntity } from 'types';
import { useTasksContext } from '../../../utils/hooks/useTasksContext';
import { useFetch } from '../../../utils/hooks/useFetch';
import { oneTask } from '../../../data/pages/task';
import backgrounImg from '../../../images/space.png';
import { ControlPanel } from '../../layout/index';
import { NotFound } from '../NotFound/NotFound';

import {
  Paragraph,
  SectionCart,
  SectionHeader,
  Spiner,
  TaskForm,
} from '../../common/index';
import styles from './Task.module.scss';

const Task = () => {
  const { noTask, cathegoryLabel, priorityLabel } = oneTask;
  const { id } = useParams();
  const { data, loading, fetchData } = useFetch<TaskEntity>();

  const {
    state: { task },
    dispatch,
  } = useTasksContext();

  useEffect(() => {
    fetchData(`http://localhost:3001/tasks/${id}`);
    if (data) {
      dispatch({ type: 'SET_CURRENT_TASK', payload: data });
    }
  }, [dispatch, data, fetchData, id]);

  if (!task || loading === 'fetching') {
    return <Spiner />;
  }

  return (
    <SectionCart>
      <div className={styles.height}>
        {task.id === id ? (
          <div className={styles.task}>
            <div className={styles.imgWrap}>
              <img src={backgrounImg} alt='woman in space' />
            </div>
            <SectionHeader text={task.title} />
            <Paragraph text={`${task.description}`} />
            <p className={styles.taskLabel}>
              {cathegoryLabel} <span>{task.category}</span>
            </p>
            <p className={styles.taskLabel}>
              {priorityLabel}
              <span>{task.priority}</span>
            </p>
          </div>
        ) : (
          <NotFound message={noTask} />
        )}
        {task.id === id && (
          <ControlPanel>
            <TaskForm task={task} />
          </ControlPanel>
        )}
      </div>
    </SectionCart>
  );
};

export { Task };
