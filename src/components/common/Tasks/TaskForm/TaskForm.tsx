import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import { TaskEntity } from 'types';
import { HttpMethods, useFetch } from '../../../../utils/hooks/useFetch';
import { useTasksContext } from '../../../../utils/hooks/useTasksContext';
import { taskForm } from '../../../../data/pages/taskForm';
import { ButtonBlack } from '../../Buttons';
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
  const { fetchData } = useFetch<TaskEntity>();
  const { dispatch } = useTasksContext();
  const [sendInfo, setSendInfo] = useState<null | string>(null);
  const [form, setForm] = useState<Omit<TaskEntity, 'id' | 'time'>>({
    title: taskData?.title || '',
    category: taskData?.category || Category.Done,
    priority: taskData?.priority || Priority.High,
    description: taskData?.description || '',
  });

  const saveForm = async (e: SyntheticEvent) => {
    e.preventDefault();

    const initialOptions = {
      method: taskData?.id ? HttpMethods.PATCH : HttpMethods.POST,
      headers: {
        'Content-Type': 'application/json',
      },
      body: taskData?.id
        ? { ...form, id: taskData.id, time: new Date() }
        : form,
    };

    const url = taskData?.id
      ? `http://localhost:3001/tasks/${taskData?.id}`
      : `http://localhost:3001/tasks`;

    fetchData(url, initialOptions, (newData) => {
      setSendInfo('Task saved');

      dispatch({
        type: !taskData?.id ? 'CREATE_TASK' : 'UPDATE_TASK',
        payload: !taskData?.id
          ? newData
          : { ...newData, id: taskData?.id, time: new Date() },
      });
    });

    setForm({
      title: '',
      category: Category.Done,
      priority: Priority.High,
      description: '',
    });
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
        <span>{taskForm.title}</span>
        <input
          value={form.title}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            updateForm('title', e.target.value)
          }
          type='text'
          name='title'
          required
        />
      </p>
      <p className={styles.formLabelWrap}>
        <span>{taskForm.cathegory}</span>
        <select
          value={form.category}
          name='category'
          onChange={(e) => updateForm(e.target.name, e.target.value)}
          required
        >
          <option value={taskForm.categoryOption[0]}>
            {taskForm.categoryOption[0]}
          </option>
          <option value={taskForm.categoryOption[1]}>
            {taskForm.categoryOption[1]}
          </option>
          <option value={taskForm.categoryOption[2]}>
            {taskForm.categoryOption[2]}
          </option>
        </select>
      </p>
      <p className={styles.formLabelWrap}>
        <span>{taskForm.description}</span>
        <input
          value={form.description}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            updateForm(e.target.name, e.target.value)
          }
          type='text'
          name='description'
          required
        />
      </p>
      <p className={styles.formLabelWrap}>
        <span>{taskForm.priority}</span>
        <select
          value={form.priority}
          name='priority'
          onChange={(e) => updateForm(e.target.name, e.target.value)}
        >
          <option value={taskForm.priorityOption[0]}>
            {taskForm.priorityOption[0]}
          </option>
          <option value={taskForm.priorityOption[1]}>
            {taskForm.priorityOption[1]}
          </option>
          <option value={taskForm.priorityOption[2]}>
            {taskForm.priorityOption[2]}
          </option>
        </select>
      </p>
      <div className={styles.buttonWrap}>
        <ButtonBlack buttonName={taskData ? taskForm.edit : taskForm.add} />
      </div>
      <p className={styles.message}>{sendInfo}</p>
    </form>
  );
};
export { TaskForm };
