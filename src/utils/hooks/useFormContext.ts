import { createContext, ChangeEvent } from 'react';
import { UserEntityForm, EventEntity } from 'types';

export interface FormContextType<T> {
  form: T;
  handleFormChange: (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
}

export const FormContext = createContext<
  FormContextType<UserEntityForm | EventEntity>
>({
  form: {} as UserEntityForm | EventEntity,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleFormChange: () => {},
});
