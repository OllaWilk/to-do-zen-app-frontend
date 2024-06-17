import React from 'react';
import { EventEntity, NewEventEntity, EventStatus } from 'types';
import { useEventFetch } from '../../../../utils/hooks';
import { Form, Input, Textarea, Select } from '../../Form';
import styles from './EventForm.module.scss';

interface Props {
  event?: EventEntity;
}

export const EventForm = ({ event }: Props) => {
  const { eventInsert, error } = useEventFetch();
  const formValues = {
    title: event?.title || '',
    status: event?.status || ('planned' as EventStatus),
    category: event?.category || '',
    description: event?.description || '',
    duration: event?.duration || '',
    price: event?.price || 0,
    event_date: event?.event_date,
    reminder: event?.reminder || 1,
    creator_id: event?.creator_id || '',
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
        <Input label={'Date'} name='date' type='datetime-local' />
        <Select
          label={'status'}
          name='status'
          options={['planned', 'ongoing', 'completed'] as EventStatus[]}
        />
        <Input label={'category'} name='category' required />
        <Input label={'price'} name='price' />
        <Input label={'duration'} name='duration' required />
        <Textarea
          label={'description'}
          name='description'
          required
          minLength={2}
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
