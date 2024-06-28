import React from 'react';
import { EventEntity, NewEventEntity, EventStatus } from 'types';
import { formatDate, useEventFetch } from '../../../../utils/hooks';
import { Form, Input, Textarea, Select } from '../../Form';
import styles from './EventForm.module.scss';

interface Props {
  event?: EventEntity;
}

export const EventForm = ({ event }: Props) => {
  const { eventInsert, error } = useEventFetch();
  const eventDataFormat = formatDate(`${event?.event_date}`);

  const formValues = {
    title: event?.title || '',
    status: event?.status || ('planed' as EventStatus),
    category: event?.category || '',
    description: event?.description || '',
    duration: event?.duration || '',
    price: Number(event?.price || 0),
    event_date: event?.event_date ? (eventDataFormat as Date) : null,
    reminder: event?.reminder || 1,
    creator_id: event?.creator_id || '',
    lat: 51.107883,
    lon: 17.038538,
  };

  /* SUBMIT FORM */
  const submit = async (form: NewEventEntity) => {
    if (event) {
      await eventInsert({
        ...event,
        ...form,
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
        <Input
          label={'title'}
          name='title'
          required
          minLength={3}
          maxLength={100}
          placeholder={'title'}
        />
        <Input label={'Date'} name='event_date' type='date' />
        <Select
          label={'status'}
          name='status'
          options={['planed', 'ongoing', 'completed'] as EventStatus[]}
        />
        <Input label={'category'} name='category' required />
        <Input label={'price'} name='price' type='number' />
        <Input label={'duration'} name='duration' required />
        <Textarea
          label={'description'}
          name='description'
          required
          minLength={3}
          maxHeight={100}
        />
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
