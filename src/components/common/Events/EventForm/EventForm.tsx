import React from 'react';
import { EventEntity, NewEventEntity, EventStatus } from 'types';
import {
  formatIsoDateString,
  useEventFetch,
  useAsistantMessageContext,
} from '../../../../utils/hooks/index';
import { Form, Input, Textarea, Select } from '../../Form';
import styles from './EventForm.module.scss';

interface Props {
  event?: EventEntity;
}

interface NewEventEntityWithAdress extends NewEventEntity {
  address?: string;
}

export const EventForm = ({ event }: Props) => {
  // Hook to handle event insertion and error handling
  const { eventInsert } = useEventFetch();
  // Format the event date for display in the form
  const eventDataFormat = formatIsoDateString(`${event?.event_date}`);
  // State to manage location error messages
  const { setMessage } = useAsistantMessageContext();

  // Initial form values, using event data if available
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
    lat: event?.lat,
    lon: event?.lon,
  };

  /* SUBMIT FORM */
  const submit = async (form: NewEventEntityWithAdress) => {
    // Construct the Nominatim API URL for location search
    const locationSearch = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
      `${form.address}`
    )}`;

    try {
      // Fetch the location data from Nominatim API
      const response = await fetch(locationSearch);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      // Parse the response JSON to get the location data
      const location = await response.json();

      // Set the latitude and longitude from the location data
      form.lon = parseFloat(location[0].lon);
      form.lat = parseFloat(location[0].lat);

      // Insert or update the event with the form data
      if (event) {
        await eventInsert({
          ...event,
          ...form,
        });
      } else {
        await eventInsert(form);
      }
    } catch (error) {
      console.error(error);
      // Set an error message if location fetch fails
      setMessage(
        'Sorry, no location found. Please check for typos and ensure the format is City, Street Name, House Number. For example: "Wroclaw, Pereca 1". Avoid using abbreviations like "ul.", "al.", etc.'
      );
    }
  };

  return (
    <div className={styles.componentWrap}>
      <Form
        submit={submit}
        formValues={formValues}
        buttonName={event?.id ? 'edit' : 'submit'}
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
        <Input label={'address'} name='address' />
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
      </Form>
    </div>
  );
};
