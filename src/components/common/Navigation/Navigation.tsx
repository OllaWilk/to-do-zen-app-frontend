import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaStar, FaRocket } from 'react-icons/fa';
import { TbUfo } from 'react-icons/tb';
import { FaEarthAmericas } from 'react-icons/fa6';

import style from './Navigation.module.scss';

const Navigation = () => {
  const navigation = [
    { name: 'Cockpit', path: 'cockpit', icon: <FaStar /> },
    { name: 'Info', path: 'info', icon: <FaRocket /> },
    { name: 'For Recruiters', path: 'AleksandraWilk', icon: <TbUfo /> },
    { name: 'Portfolio', path: 'portfolio', icon: <FaEarthAmericas /> },
  ];

  return (
    <nav className={style.component}>
      {navigation.map((item) => (
        <div key={item.name} className={style.navLink}>
          <div className={style.mark}>{item.icon}</div>
          <NavLink to={`/${item.path}`}>{item.name}</NavLink>
        </div>
      ))}
    </nav>
  );
};

export { Navigation };
