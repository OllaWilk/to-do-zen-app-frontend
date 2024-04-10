import React, { SyntheticEvent, useState } from 'react';
import { TaskEntity } from 'types';
import { formContent } from '../../../data/dataStore';

import styles from './TaskForm.module.scss';

interface Props {
  taskData?: TaskEntity;
}

const TaskForm = ({ taskData }: Props) => {
  const [isChecked, setIsChecked] = useState(false);

  /* TO DO: fix problem with import Category enum from types */
  const [form, setForm] = useState({
    title: '',
    category: '',
    // reminder: null,
    priority: '',
    description: '',
  });

  const {
    title,
    cathegory,
    categoryOption,
    reminder,
    priority,
    priorityOption,
    description,
    add,
    edit,
  } = formContent;

  const saveForm = async (e: SyntheticEvent) => {
    e.preventDefault();
    console.log('saved form', form);

    try {
      const res = await fetch('http://localhost:3001/tasks/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const updateForm = (key: any, value: any) => {
    setIsChecked(!isChecked);

    setForm((prevForm) => ({
      ...prevForm,
      [key]: value,
    }));
  };

  return (
    <form action='' className={styles.taskForm} onSubmit={saveForm}>
      <p>
        <span>{title}</span>
        <input
          value={form.title}
          onChange={(e) => updateForm('title', e.target.value)}
          type='text'
          name='title'
          required
        />
      </p>
      <p>
        <span>{cathegory}</span>
        <select
          value={form.category}
          name='category'
          onChange={(e) => updateForm(e.target.name, e.target.value)}
        >
          <option value={categoryOption[0]}>{categoryOption[0]}</option>
          <option value={categoryOption[1]}>{categoryOption[1]}</option>
          <option value={categoryOption[2]}>{categoryOption[2]}</option>
        </select>
      </p>
      <p>
        <span>{description}</span>
        <input
          value={form.description}
          onChange={(e) => updateForm(e.target.name, e.target.value)}
          type='text'
          name='description'
          required
        />
      </p>
      {/* TO DO FIX PROBLEM WITH SENDING REMINDER  */}
      {/* <p>
        <label>{reminder}</label>
        <input
          value={form.reminder}
          onChange={(e) => updateForm(e.target.name, e.target.value)}
          checked={isChecked}
          type='checkbox'
          name='reminder'
        />
      </p> */}
      <p>
        <span>{priority}</span>
        <select
          value={form.priority}
          name='priority'
          onChange={(e) => updateForm(e.target.name, 'medium')}
        >
          <option value={priorityOption[0]}>{priorityOption[0]}</option>
          <option value={priorityOption[1]}>{priorityOption[1]}</option>
          <option value={priorityOption[2]}>{priorityOption[2]}</option>
        </select>
      </p>

      <button>{taskData ? edit : add}</button>
    </form>
  );
};

export { TaskForm };
