import React, { SyntheticEvent, useState } from 'react';
import { TaskEntity } from 'types';
import { formContent } from '../../../data/dataStore';

import styles from './TaskForm.module.scss';

enum Priority {
  Low = 'low',
  Medium = 'medium',
  High = 'high',
}

enum Category {
  ToDo = 'to do',
  InProgress = 'in progress',
  Done = 'done',
}

interface Props {
  taskData?: TaskEntity;
}

const TaskForm = ({ taskData }: Props) => {
  /* TO DO: fix problem with import Category enum from types */
  const [form, setForm] = useState<Omit<TaskEntity, 'id' | 'time'>>({
    title: '',
    category: Category.Done,
    priority: Priority.High,
    description: '',
  });

  const {
    title,
    cathegory,
    categoryOption,
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
      const baseUrl = 'http://localhost:3001/tasks/';
      const url = taskData?.id ? `${baseUrl}${taskData.id}` : baseUrl;

      console.log('url', url);
      console.log('baseurl', baseUrl);
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
        }),
      });

      if (res.ok) {
        setForm({
          title: '',
          category: Category.Done,
          priority: Priority.High,
          description: '',
        });
      } else {
        console.log('Error saving the form');
      }
    } catch (error) {
      console.error('Failed to save the form', error);
    }
  };

  const updateForm = (key: any, value: any) => {
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
      {/* TO DO add reminder */}
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
