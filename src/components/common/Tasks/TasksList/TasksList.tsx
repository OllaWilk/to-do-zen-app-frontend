import React, { useEffect, useState } from 'react';
import { TaskEntity } from 'types';
import { TaskInfo } from '../TaskInfo/TaskInfo';
import styles from './TasksList.module.scss';

interface Props {
  loadingData: string;
}

const TasksList = ({ loadingData }: Props) => {
  const [tasks, setTasks] = useState<TaskEntity[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3001/tasks');
      const data = await res.json();

      if (data.taskRecord && Array.isArray(data.taskRecord)) {
        setTasks(data.taskRecord);
      }
    })();
  }, []);

  return (
    <div className={styles.tasksList}>
      {tasks ? (
        tasks.map((task) => (
          <div key={task.id} className={styles.task}>
            <h2>{task.category}</h2>
            <TaskInfo
              title={task.title}
              description={task.description}
              id={task.id}
            />
          </div>
        ))
      ) : (
        <p>{loadingData}</p>
      )}
    </div>
  );
};

export { TasksList };
