import React, { useEffect, useState } from 'react';
import { TaskEntity } from 'types';
import { tasksViewContent } from '../../../../data/dataStore';
import { SearchBar, TaskInfo } from '../../../common';
import styles from './TasksList.module.scss';

const TasksList = () => {
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
      <SearchBar />
      {tasks ? (
        tasks.map((task) => (
          <div key={task.id}>
            <h2>{task.category}</h2>
            <TaskInfo
              title={task.title}
              description={task.description}
              id={task.id}
            />
          </div>
        ))
      ) : (
        <p>{tasksViewContent.loading}</p>
      )}
    </div>
  );
};

export { TasksList };
