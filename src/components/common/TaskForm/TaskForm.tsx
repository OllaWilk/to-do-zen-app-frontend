import React from 'react';
import styles from './TaskForm.module.scss';

const TaskForm = () => {
  return (
    <form action='' className={styles.taskForm}>
      <p>
        <label>Task Title</label>
        <br />
        <input type='text' name='title' placeholder='title' required />
      </p>
      <p>
        <label>Task Category</label>
        <br />
        <input type='text' name='category' placeholder='category' required />
      </p>
      <p>
        <label>Task Category</label>
        <br />
        <input
          type='text'
          name='description'
          placeholder='description'
          required
        />
      </p>
      <p>
        <label>priority</label>
        <input type='checkbox' name='reminder' />
      </p>
      <p>
        <label htmlFor=''></label>
        <select name='priority'>
          <option value='low'>Low</option>
          <option value='medium'>Medium</option>
          <option value='high'>High</option>
        </select>
      </p>

      <button>Add new task</button>
    </form>
  );
};

export { TaskForm };
