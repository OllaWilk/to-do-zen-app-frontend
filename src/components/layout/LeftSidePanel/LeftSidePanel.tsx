import React from 'react';
import style from './LeftSidePanel.module.scss';

type Props = {
  children: React.ReactNode;
};

const LeftSidePanel = ({ children }: Props) => (
  <div className={style.leftSidePAnel}> {children}</div>
);

export { LeftSidePanel };
