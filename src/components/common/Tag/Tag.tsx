import React from 'react';
import style from './Tag.module.scss';

interface Props {
  text: string | number;
  children?: React.ReactNode;
  days?: string;
}
export const Tag = ({ text, children, days }: Props) => {
  return (
    <div className={style.tag}>
      <div className={style.wrap}>{children}</div>
      <div className={style.text}>
        {text}
        {days && days}
      </div>
    </div>
  );
};
