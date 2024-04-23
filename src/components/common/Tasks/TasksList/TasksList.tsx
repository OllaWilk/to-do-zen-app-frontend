import React, { useEffect } from 'react';
import { useTasksContext } from '../../../../utils/hooks/useTasksContext';
import { TaskEntity } from 'types';
import { TaskInfo } from '../TaskInfo/TaskInfo';
import styles from './TasksList.module.scss';

const TasksList = () => {
  const {
    state: { tasks },
    dispatch,
  } = useTasksContext();

  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3001/tasks');
      const data = await res.json();

      if (res.ok && data.taskRecord && Array.isArray(data.taskRecord)) {
        dispatch({ type: 'SET_TASKS', payload: data.taskRecord });
      }
    })();
  }, [dispatch]);

  return (
    <div className={styles.tasksList}>
      {tasks &&
        tasks.map((task: TaskEntity) => (
          <TaskInfo
            key={task.id}
            title={task.title}
            description={task.description}
            id={task.id}
          />
        ))}
    </div>
  );
};

export { TasksList };
