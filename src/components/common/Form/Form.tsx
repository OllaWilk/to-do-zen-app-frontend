import React, { useState, ReactElement, ChangeEvent } from 'react';
import { FormContext, FormValues } from '../../../utils/hooks';

import styles from './Form.module.scss';

interface FormProviderProps<T> {
  children: ReactElement[] | ReactElement;
  initialValues: FormValues<T>;
  submit: (form: FormValues<T>) => void;
  buttonName: string;
}

export function Form<T>({
  children,
  submit,
  initialValues,
  buttonName,
}: FormProviderProps<T>) {
  const [form, setForm] = useState<FormValues<T>>(initialValues);

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

  const handleSubmit = () => {
    submit(form);
    setForm(initialValues);
  };

  return (
    <form>
      <FormContext.Provider value={{ form, handleFormChange }}>
        {children}
      </FormContext.Provider>

      <button className={styles.component} type='button' onClick={handleSubmit}>
        {buttonName}
      </button>
    </form>
  );
}
