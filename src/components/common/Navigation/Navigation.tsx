import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navigation.module.scss';

const Navigation = () => {
  const navLinks = ['tasks', 'info', 'about'];
  return (
    <nav className={style.component}>
      {navLinks.map((link) => (
        <div key={link} className={style.navLink}>
          <div className={style.mark}></div>
          <NavLink to={`/${link}`}>{link}</NavLink>
        </div>
      ))}
    </nav>
  );
};

export { Navigation };
