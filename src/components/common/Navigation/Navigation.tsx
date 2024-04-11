import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navigation.module.scss';

const Navigation = () => {
  const navLinks = [
    { name: 'Tasks', path: 'tasks' },
    { name: 'Info', path: 'info' },
    { name: 'About', path: 'about' },
  ];

  return (
    <nav className={style.component}>
      {navLinks.map((link) => (
        <div key={link.name} className={style.navLink}>
          <div className={style.mark}></div>
          <NavLink to={`/${link.path}`}>{link.name}</NavLink>
        </div>
      ))}
    </nav>
  );
};

export { Navigation };
