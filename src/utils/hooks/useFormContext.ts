import { createContext, ChangeEvent } from 'react';
import { UserEntityForm, NewEventEntity } from 'types';

export interface FormContextType<T> {
  form: T;
  handleFormChange: (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
}

export const FormContext = createContext<
  FormContextType<UserEntityForm | NewEventEntity>
>({
  form: {} as UserEntityForm | NewEventEntity,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleFormChange: () => {},
});
