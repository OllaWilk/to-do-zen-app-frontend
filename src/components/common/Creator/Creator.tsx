import React, { ChangeEvent, ReactNode, useState } from 'react';
import { Button } from '../index';
import styles from './Creator.module.scss';

interface Props {
  text: string;
  children?: ReactNode;
  action?: (value: string) => void;
}
const Creator = ({ text, children, action }: Props) => {
  const [newItem, setNewItem] = useState({ value: '', visibleButtons: false });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log('handleChange');
    setNewItem({
      value: event.target.value,
      visibleButtons: event.target.value.length > 0,
    });
  };

  const handleOK = () => {
    console.log('handleOk');
    if (newItem.value !== '') {
      action?.(newItem.value);
    }

    setNewItem({
      value: '',
      visibleButtons: false,
    });
  };

  const handleCancel = () => {
    console.log('handle Cancel');
  };

  return (
    <div className={styles.component}>
      <input
        type='text'
        placeholder={text}
        value={newItem.value}
        onChange={(event) => handleChange(event)}
      />
      <div
        className={
          styles.buttons +
          (newItem.visibleButtons ? ' ' + styles.buttonsShown : '')
        }
      >
        <Button onClick={() => handleOK()}>OK</Button>
        <Button onClick={() => handleCancel()} variant='danger'>
          cancel
        </Button>
        {children}
      </div>
    </div>
  );
};

export { Creator };
