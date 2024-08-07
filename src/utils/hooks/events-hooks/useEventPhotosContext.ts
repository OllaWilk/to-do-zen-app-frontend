import { EventPhotosContext } from '../../../context/eventPhotos';
import { useContext } from 'react';

export const useEventPhotosContext = () => {
  const context = useContext(EventPhotosContext);

  if (!context) {
    throw Error(
      'useEventPhotosContext must be used inside an TasksContextProvider'
    );
  }

  return context;
};
