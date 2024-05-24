import React, { useState } from 'react';
import { EventEntity } from 'types';
import { taskForm } from '../../../../data/pages/taskForm';
import {
  HttpMethods,
  useFetch,
  useTasksContext,
} from '../../../../utils/hooks';
import { Form, Input, Select, Textarea } from '../../Form';
import styles from './TaskForm.module.scss';

interface Props {
  task?: EventEntity;
}

export const TaskForm = ({ task }: Props) => {
  const { fetchData } = useFetch<EventEntity>();
  const { dispatch } = useTasksContext();
  const [message, setMessage] = useState<null | string>(null);
  const [isError, setIsError] = useState<boolean>(false);

  /* FORM TASK VALUES */
  const initialValues: EventEntity = {
    title: '',
    creator_id: '',
    price: 'free',
    date: new Date(),
    status: 'planed',
    description: '',
    url: '',
    lat: 0,
    lon: 0,
    category: '',
    duration: '',
    reminder: 0,
  };

  /* VALIDATION */
  const validateForm = (form: EventEntity): string | null => {
    if (form.title.trim().length <= 2 || form.title.trim().length >= 99) {
      return `Your title currently has ${form.title.length} characters, it should be between 3 and 100 characters long`;
    } else if (form.description && form.description.trim().length >= 1001) {
      return `Description should be at least 1000 characters long. Your description currently has ${form.description.length} characters,`;
    }
    return null;
  };
  /* SUBMIT FORM */
  const submit = async (form: EventEntity) => {
    /* CHECK FORM BEFORE SUBMIT */
    const ErrorMessage = validateForm(form);

    if (ErrorMessage) {
      setMessage(ErrorMessage);
      setIsError(true);
    } else {
      const method = task?.id ? HttpMethods.PATCH : HttpMethods.POST;
      const body = task?.id ? { ...form, id: task.id, time: new Date() } : form;
      const url = task?.id
        ? `http://localhost:3001/events/${task?.id}`
        : `http://localhost:3001/events`;
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
            : { ...newData, id: task?.id, created_at: new Date() },
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

        <Textarea label={taskForm.description} name='description' />
        <Select
          label='priority'
          name='priority'
          options={[`planed`, `ongoind`, `completed`]}
        />
        <p className={`${isError ? styles.error : styles.success}`}>
          {message}
        </p>
      </Form>
    </div>
  );
};
