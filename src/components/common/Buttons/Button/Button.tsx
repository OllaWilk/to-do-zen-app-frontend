import React, { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
}
const Button = ({ variant = '', ...otherProps }: Props) => (
  <button
    {...otherProps}
    className={
      styles.component +
      variant
        .split(' ')
        .map((name) => ' ' + (styles[name] || name))
        .join('')
    }
  />
);

export { Button };
