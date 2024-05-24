import { createContext, ChangeEvent } from 'react';
import { EventEntity } from 'types';

export interface FormValues<T> extends Omit<EventEntity, 'id' | 'time'> {
  [key: string]:
    | string
    | number
    | string[]
    | number[]
    | undefined
    | Date
    | 'planed'
    | 'ongoing'
    | 'completed'
    | 'free'
    | unknown
    | any
    | T;
}

interface FormContextType {
  form: any;
  handleFormChange: (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
}

export const FormContext = createContext<FormContextType>({
  form: { title: '', category: '' },
  handleFormChange: () => {
    console.log('');
  },
});
