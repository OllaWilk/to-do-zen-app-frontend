import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import { createOrUodateTask } from '../../../../utils/apiCalls/taskService';
import { useTasksContext } from '../../../../utils/hooks/useTasksContext';
import { TaskEntity } from 'types';
import { taskForm } from '../../../../data/pages/taskForm';
import { ButtonDeleteTask, ButtonForm } from '../../Buttons';
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
  const { dispatch } = useTasksContext();

  const [form, setForm] = useState<Omit<TaskEntity, 'id' | 'time'>>({
    title: taskData?.title || '',
    category: taskData?.category || Category.Done,
    priority: taskData?.priority || Priority.High,
    description: taskData?.description || '',
  });
  const [sendInfo, setSendInfo] = useState<null | string>(null);

  const saveForm = async (e: SyntheticEvent) => {
    e.preventDefault();

    const savedTask = await createOrUodateTask(form, taskData?.id);

    setForm({
      title: '',
      category: Category.Done,
      priority: Priority.High,
      description: '',
    });
    setSendInfo('Task saved');
    dispatch({
      type: taskData ? 'UPDATE_TASK' : 'CREATE_TASK',
      payload: savedTask,
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
        {taskData && <ButtonDeleteTask taskId={`${taskData.id}`} />}
        <ButtonForm text={taskData ? taskForm.edit : taskForm.add} />
      </div>
      <p className={styles.message}>{sendInfo}</p>
    </form>
  );
};

export { TaskForm };
