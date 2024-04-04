import React from 'react';
import { SearchBar, TaskInfo } from '../../../common';
import styles from './TasksList.module.scss';

const TasksList = () => {
  return (
    <div className={styles.tasksList}>
      <SearchBar />
      <div>
        <h2>Category: To Do</h2>

        <TaskInfo
          title={'title: Organize Your Workspace'}
          description={
            'Description: Keeping your desk clean and organized can significantly enhance your productivity and help you focus better on your tasks.'
          }
        />
        <TaskInfo
          title={'Schedule a Catch-up with Friends '}
          description={
            'Maintaining social connections is crucial for your well-being. Set a date to reconnect and share life updates with friends.'
          }
        />
        <TaskInfo
          title={'Read a Book Chapter '}
          description={
            'Dedicate some time to reading a chapter of a book every day. It’s a great way to relax and learn something new, expanding your perspectives'
          }
        />
      </div>
      <div>
        <h2>In Progress</h2>
        <TaskInfo
          title={'Update Your Resume'}
          description={
            'Take some time to refresh your resume. Keeping it up-to-date is essential for when new opportunities arise'
          }
        />
      </div>
      <div>
        <h2>Done</h2>
        <TaskInfo
          title={'Learn a New Skill'}
          description={
            'Identify a skill that could benefit your career and spend some time each day developing it, whether it’s a software tool, a programming language, or soft skills like public speaking.'
          }
        />
      </div>
    </div>
  );
};

export { TasksList };
