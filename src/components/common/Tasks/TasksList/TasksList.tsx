import React, { useEffect } from 'react';
import { TaskEntity } from 'types';
import { useFetch } from '../../../../utils/hooks/useFetch';
import { useTasksContext } from '../../../../utils/hooks/useTasksContext';
import { NoDataAlert, Spiner, TaskInfo } from '../../../common';
import styles from './TasksList.module.scss';

const TasksList = () => {
  const { data, resStatus } = useFetch<{ taskRecord: TaskEntity[] }>(
    'http://localhost:3001/tasks'
  );

  const {
    state: { tasks },
    dispatch,
  } = useTasksContext();

  useEffect(() => {
    if (data) {
      dispatch({ type: 'SET_TASKS', payload: data.taskRecord });
    }
  }, [dispatch, data, resStatus]);

  if (!data || resStatus === 'fetching') {
    return <Spiner />;
  } else if (data.taskRecord.length === 0) {
    return <NoDataAlert />;
  } else {
    return (
      <div className={styles.tasksList}>
        {tasks &&
          tasks.map((task) => (
            <TaskInfo
              key={task.id}
              title={task.title}
              description={task.description}
              id={task.id}
            />
          ))}
      </div>
    );
  }
};

export { TasksList };
