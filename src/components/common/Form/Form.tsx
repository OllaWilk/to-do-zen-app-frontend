import React, { ReactElement, useState, useContext, useCallback } from 'react';
import styles from './Form.module.scss';

interface FormValues {
  [key: string]: string | number | boolean | string[] | number[];
}

interface FormContectType {
  form: FormValues;
  handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
interface Props {
  children: ReactElement[];
  formInitialValues: FormValues;
  functionToForm: (form: FormValues) => void;
}

const FormContext = React.createContext<FormContectType | undefined>(undefined);

export function useFormContext() {
  const context = useContext(FormContext);

  if (!context)
    throw new Error('useFormContext must be used within a FormProvider');

  return context;
}

function Form({ children, formInitialValues, functionToForm }: Props) {
  const [form, setForm] = useState<FormValues>(formInitialValues);

  const handleFormChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      const updatedForm = {
        ...form,
        [name]: value,
      };
      setForm(updatedForm);
    },
    [form]
  );

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(form, 'form w FORM');
    functionToForm(form);
    setForm(formInitialValues);
  };

  return (
    <FormContext.Provider
      value={{
        form,
        handleFormChange,
      }}
    >
      <div className={styles.componentForm}>
        <form onSubmit={handleSubmit}>{children}</form>
      </div>
    </FormContext.Provider>
  );
}

export { Form };
