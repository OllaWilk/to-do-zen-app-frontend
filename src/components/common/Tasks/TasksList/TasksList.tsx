import React, { useEffect } from 'react';
import { TaskEntity } from 'types';
import { useFetch } from '../../../../utils/hooks/useFetch';
import { useTasksContext } from '../../../../utils/hooks/useTasksContext';
import { NoDataAlert, Spiner, TaskInfo } from '../../../common';
import styles from './TasksList.module.scss';

const TasksList = () => {
  const { data, loading, fetchData } = useFetch<{ taskRecord: TaskEntity[] }>();

  const {
    state: { tasks },
    dispatch,
  } = useTasksContext();

  useEffect(() => {
    fetchData('http://localhost:3001/tasks');
    if (data) {
      dispatch({ type: 'SET_TASKS', payload: data.taskRecord });
    }
  }, [dispatch, data, loading, fetchData]);

  if (!data || loading === 'fetching') {
    return <Spiner />;
  } else if (!tasks || tasks.length === 0) {
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
