import React from 'react';
import {} from '../../../../data/dataStore';
import { SearchBar, TaskCategorie } from '../../../common';
import styles from './TasksList.module.scss';

const TasksList = () => {
  return (
    <div className={styles.tasksList}>
      <SearchBar />
      <TaskCategorie
        title={'To Do'}
        description={
          'The "To Do" list is your personal action plan. Here, you jot down all the tasks you need to accomplish to move closer to achieving your goals. It\'s the first step toward organizing your time and energy in the most effective way'
        }
      />
      <TaskCategorie
        title={'In Progress'}
        description={
          'The "In Progress" list contains tasks you are currently working on. It serves as a reminder that you are in motion, developing, and executing plans. This list allows you to monitor your progress and maintain motivation'
        }
      />
      <TaskCategorie
        title={'Done'}
        description={
          'The "Done" list is a record of your accomplishments. Every task that lands here is proof that you are one step closer to fulfilling your dreams. It\'s also an excellent opportunity to celebrate successes, big and small.'
        }
      />
    </div>
  );
};

export { TasksList };
