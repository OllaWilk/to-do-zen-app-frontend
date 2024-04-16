import React, { SyntheticEvent, useState } from 'react';
import { createOrUodateTask } from '../../../utils/apiCalls/taskService';
import { TaskEntity } from 'types';
import { formContent } from '../../../data/dataStore';
import { ButtonDeleteTask, ButtonForm } from '../Buttons';
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
  const [sendInfo, setSendInfo] = useState<null | string>(null);

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

    try {
      const savedTask = await createOrUodateTask(form, taskData?.id);
      console.log('Task saved:', savedTask);

      setForm({
        title: '',
        category: Category.Done,
        priority: Priority.High,
        description: '',
      });
      setSendInfo('Task saved');
    } catch (error) {
      console.error('Error saving the form', error);
      setSendInfo(`${error}`);
    }
  };

  const updateForm = (key: string, value: string) => {
    setForm((prevForm) => ({
      ...prevForm,
      [key]: value,
    }));
  };

  return (
    <form action='' className={styles.taskForm} onSubmit={saveForm}>
      <p className={styles.formLabelWrap}>
        <span>{title}</span>
        <input
          value={form.title}
          onChange={(e) => updateForm('title', e.target.value)}
          type='text'
          name='title'
          required
        />
      </p>
      <p className={styles.formLabelWrap}>
        <span>{cathegory}</span>
        <select
          value={form.category}
          name='category'
          onChange={(e) => updateForm(e.target.name, e.target.value)}
          required
        >
          <option value={categoryOption[0]}>{categoryOption[0]}</option>
          <option value={categoryOption[1]}>{categoryOption[1]}</option>
          <option value={categoryOption[2]}>{categoryOption[2]}</option>
        </select>
      </p>
      <p className={styles.formLabelWrap}>
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
      <p className={styles.formLabelWrap}>
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
      <div className={styles.buttonWrap}>
        {taskData && <ButtonDeleteTask taskId={`${taskData.id}`} />}
        <ButtonForm text={taskData ? edit : add} />
      </div>
      <p className={styles.message}>{sendInfo}</p>
    </form>
  );
};

export { TaskForm };
