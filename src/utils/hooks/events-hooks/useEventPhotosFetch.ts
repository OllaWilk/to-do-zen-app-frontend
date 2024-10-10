import { useCallback, useState } from 'react';
import {
  useAsistantMessageContext,
  useEventPhotosContext,
} from '../../../utils/hooks';
import { EventPhoto } from '@alexwilk/spacesteps-types';

interface UseEventPhotosFetchProps {
  eventId: string;
  file: File | null;
  description: string;
}

export const useEventPhotosFetch = () => {
  const { setMessage } = useAsistantMessageContext();
  const { dispatch } = useEventPhotosContext();
  const [success, setSuccess] = useState<string | null>(null);

  const handleUpload = async ({
    eventId,
    file,
    description,
  }: UseEventPhotosFetchProps) => {
    if (!file) {
      setMessage({
        message: 'No file selected. Please attach a picture.',
        ikonError: true,
      });
      setSuccess(null);
      return;
    } else {
      setMessage({ message: null, ikonError: null });
      setSuccess(null);

      const formData = new FormData();
      formData.append('image', file);
      formData.append('description', description);
      formData.append('event_id', eventId);
      const uploadUrl = `${process.env.REACT_APP_API_URL}/event/photos/upload`;

      try {
        const response = await fetch(uploadUrl, {
          method: 'POST',
          body: formData,
          credentials: 'include',
        });

        if (!response.ok) {
          const errorData = await response.json();
          setMessage({ message: errorData.message, ikonError: true });
          throw new Error(errorData.message || 'Network response was not ok');
        }

        const resultText: EventPhoto = await (response.headers
          .get('content-type')
          ?.includes('application/json')
          ? response.json()
          : response.text());

        setSuccess('File uploaded successfully');

        dispatch({
          type: 'ADD_EVENT_PHOTO',
          payload: resultText,
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  const photoFetch = useCallback(
    async (eventId: string) => {
      setMessage({ message: null, ikonError: null });

      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}event/photos/${eventId}`,
          {
            credentials: 'include',
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch photos');
        }

        const data: EventPhoto[] = await response.json();

        dispatch({
          type: 'SET_EVENT_PHOTO',
          payload: data,
        });
      } catch (error) {
        console.error('Failed to load photos', error);
        setMessage({ message: 'Failed to load photos', ikonError: true });
      }
    },
    [dispatch, setMessage]
  );

  const onDelete = async (photo_id: string) => {
    setMessage({ message: null, ikonError: null });
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/event/photos/delete/${photo_id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        }
      );

      if (res.ok) {
        dispatch({ type: 'DELETE_EVENT_PHOTO', payload: photo_id });
        setMessage({
          message: 'The photo has been successfully deleted.',
          ikonError: false,
        });
      } else {
        const json = await res.json();
        setMessage({
          message: json.message || 'Failed to delete photo',
          ikonError: true,
        });
      }
    } catch (error) {
      setMessage({
        message: 'An error occurred while deleting the photo.',
        ikonError: true,
      });
    }
  };

  return { handleUpload, success, photoFetch, onDelete };
};
