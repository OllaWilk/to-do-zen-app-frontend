import { createContext, ChangeEvent } from 'react';
import { TaskEntity } from 'types';

/* DO USUNIECIA */
export enum Priority {
  Low = 'low',
  Medium = 'medium',
  High = 'high',
}

export enum Category {
  ToDo = 'to do',
  InProgress = 'in progress',
  Done = 'done',
}

export interface FormValues<T> extends Omit<TaskEntity, 'id' | 'time'> {
  [key: string]:
    | string
    | number
    | Category
    | Priority
    | string[]
    | number[]
    | undefined
    | T;
}

interface FormContextType<T> {
  form: FormValues<T>;
  handleFormChange: (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
}

export const FormContext = createContext<FormContextType<any>>({
  form: { title: '', category: Category.Done },
  handleFormChange: () => {
    console.log('');
  },
});
