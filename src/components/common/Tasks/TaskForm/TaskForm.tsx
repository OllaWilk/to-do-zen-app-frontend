import React, { useState } from 'react';
import { TaskEntity, CreateTaskReq } from 'types';
import { taskForm } from '../../../../data/pages/taskForm';
import {
  HttpMethods,
  useFetch,
  useTasksContext,
} from '../../../../utils/hooks';
import { Form, Input, Select, Textarea } from '../../Form';
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
  task?: TaskEntity;
}

const TaskForm = ({ task }: Props) => {
  const { fetchData } = useFetch<TaskEntity>();
  const { dispatch } = useTasksContext();
  const [message, setMessage] = useState<null | string>(null);
  const [isError, setIsError] = useState<boolean>(false);

  /* FORM TASK VALUES */
  const initialValues: CreateTaskReq = {
    title: '',
    category: Category.Done,
    priority: Priority.High,
    description: '',
  };

  /* VALIDATION */
  const validateForm = (form: CreateTaskReq): string | null => {
    if (form.title.trim().length <= 2 || form.title.trim().length >= 99) {
      return `Your title currently has ${form.title.length} characters, it should be between 3 and 100 characters long`;
    } else if (!Object.values(Category).includes(form.category)) {
      return 'Please select one of the three available categories: "To Do", "In Progress", or "Done".';
    } else if (!Object.values(Priority).includes(form.priority as Priority)) {
      return 'Please select one of the three available priorities: "low", "medium", or "high".';
    } else if (form.description && form.description.trim().length >= 1001) {
      return `Description should be at least 1000 characters long. Your description currently has ${form.description.length} characters,`;
    }
    return null;
  };
  /* SUBMIT FORM */
  const submit = async (form: CreateTaskReq) => {
    /* CHECK FORM BEFORE SUBMIT */
    const ErrorMessage = validateForm(form);

    if (ErrorMessage) {
      setMessage(ErrorMessage);
      setIsError(true);
    } else {
      const method = task?.id ? HttpMethods.PATCH : HttpMethods.POST;
      const body = task?.id ? { ...form, id: task.id, time: new Date() } : form;
      const url = task?.id
        ? `http://localhost:3001/tasks/${task?.id}`
        : `http://localhost:3001/tasks`;
      const initialOptions = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      };
      fetchData(url, initialOptions, (newData) => {
        setMessage('Task saved');
        setIsError(false);
        dispatch({
          type: !task?.id ? 'CREATE_TASK' : 'UPDATE_TASK',
          payload: !task?.id
            ? newData
            : { ...newData, id: task?.id, time: new Date() },
        });
      });
    }
  };

  return (
    <div className={styles.componentWrap}>
      <Form
        submit={submit}
        initialValues={initialValues}
        buttonName={task?.id ? 'edit' : 'add'}
      >
        <Input label={taskForm.title} name='title' />
        <Select
          label='category'
          name='category'
          options={[
            `${Category.Done}`,
            `${Category.InProgress}`,
            `${Category.ToDo}`,
          ]}
        />
        <Textarea label={taskForm.description} name='description' />
        <Select
          label='priority'
          name='priority'
          options={[
            `${Priority.High}`,
            `${Priority.Low}`,
            `${Priority.Medium}`,
          ]}
        />
        <p className={`${isError ? styles.error : styles.success}`}>
          {message}
        </p>
      </Form>
    </div>
  );
};

export { TaskForm };
