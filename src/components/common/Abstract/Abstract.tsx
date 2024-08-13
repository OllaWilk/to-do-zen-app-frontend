import React from 'react';
import style from './Abstract.module.scss';

interface Props {
  abstract: string;
}
const Abstract = ({ abstract }: Props) => (
  <h3 className={style.text}>{abstract}</h3>
);

export { Abstract };
