import React from 'react';
import { MdEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';
import style from './ButtonEdit.module.scss';

interface Props {
  url: string;
}
export const ButtonEdit = ({ url }: Props) => (
  <Link to={url} className={style.icon}>
    <MdEdit />
  </Link>
);
