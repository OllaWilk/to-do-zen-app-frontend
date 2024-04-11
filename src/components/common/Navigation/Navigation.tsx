import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaStar, FaRocket } from 'react-icons/fa';
import { TbUfo } from 'react-icons/tb';

import style from './Navigation.module.scss';

const Navigation = () => {
  const navLinks = [
    { name: 'Tasks', path: 'tasks', icon: <FaStar /> },
    { name: 'Info', path: 'info', icon: <FaRocket /> },
    { name: 'About', path: 'about', icon: <TbUfo /> },
  ];

  return (
    <nav className={style.component}>
      {navLinks.map((link) => (
        <div key={link.name} className={style.navLink}>
          <div className={style.mark}>{link.icon}</div>
          <NavLink to={`/${link.path}`}>{link.name}</NavLink>
        </div>
      ))}
    </nav>
  );
};

export { Navigation };
