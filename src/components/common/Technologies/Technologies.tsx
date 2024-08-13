import React, { ReactNode } from 'react';

import styles from './Technologies.module.scss';

interface Technology {
  icon: ReactNode;
  name: string;
}

interface Props {
  technologies: Technology[];
}

const Technologies = ({ technologies }: Props) => (
  <ul>
    {technologies.map((el, index) => (
      <li key={el.name} className={styles.technologies}>
        {el.icon}
        <p>{el.name}</p>
      </li>
    ))}
  </ul>
);

export { Technologies };
