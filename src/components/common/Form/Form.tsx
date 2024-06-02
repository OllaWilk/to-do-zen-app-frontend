import React, { useState, ReactElement, ChangeEvent, FormEvent } from 'react';
import { UserEntityForm, NewEventEntity } from 'types';
import { FormContext } from '../../../utils/hooks';
import styles from './Form.module.scss';

interface FormProviderProps<T> {
  children: ReactElement[] | ReactElement;
  formValues: T;
  submit: (form: T) => void;
  buttonName: string;
}

export function Form<T extends UserEntityForm | NewEventEntity>({
  children,
  submit,
  formValues,
  buttonName,
}: FormProviderProps<T>) {
  const [form, setForm] = useState(formValues);

  const handleFormChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log(form);
    e.preventDefault();
    submit(form);
    setForm(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormContext.Provider value={{ form, handleFormChange }}>
        {children}
      </FormContext.Provider>
      <button className={styles.component} type='submit'>
        {buttonName}
      </button>
    </form>
  );
}
