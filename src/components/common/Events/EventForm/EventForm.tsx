import React from 'react';
import { EventEntity, NewEventEntity } from 'types';
import { useEventFetch } from '../../../../utils/hooks';
import { EventStatus } from '../../../../utils/types';
import { Form, Input, Textarea, Select } from '../../Form';
import styles from './EventForm.module.scss';

interface Props {
  event?: EventEntity;
}

export const EventForm = ({ event }: Props) => {
  const { eventInsert, error } = useEventFetch();

  /* FORM TASK VALUES */
  const formValues: NewEventEntity = {
    title: '',
    status: EventStatus.PLANED,
    category: '',
    description: '',
    duration: '',
    price: 0,
    date: null,
    reminder: 1,

    creator_id: '2c4ec2b4-29d7-48b8-bafd-ed71eb093a9f',
  };

  /* SUBMIT FORM */
  const submit = async (form: NewEventEntity) => {
    if (event) {
      await eventInsert({
        ...form,
        id: event.id,
        created_at: event.created_at,
      });
    } else {
      await eventInsert(form);
    }
  };

  return (
    <div className={styles.componentWrap}>
      <Form
        submit={submit}
        formValues={formValues}
        buttonName={event?.id ? 'edit' : 'add'}
      >
        <Input label={'title'} name='title' />
        <Input label={'Date'} name='date' type='datetime-local' />

        <Select
          label={'status'}
          name='status'
          options={[
            EventStatus.PLANED,
            EventStatus.ONGOING,
            EventStatus.COMPLETED,
          ]}
        />
        <Input label={'category'} name='category' />
        <Input label={'price'} name='price' />
        <Input label={'duration'} name='duration' />
        <Textarea label={'description'} name='description' />
        <Input
          label={'Remind me (days before event)'}
          name='reminder'
          type='number'
        />
        <p className={`${error ? styles.error : styles.success}`}>{error}</p>
      </Form>
    </div>
  );
};
