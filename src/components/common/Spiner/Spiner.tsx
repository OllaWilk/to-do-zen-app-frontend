import React from 'react';

import { TbUfo } from 'react-icons/tb';
import style from './Spiner.module.scss';

const Spiner = () => {
  return (
    <div className={style.spinerWraper}>
      <TbUfo />
      <p>It looks like you do not have any events scheduled right now.</p>
      <p>
        To see something here, simply add your events and they will appear in no
        time.
      </p>
      <p> Start planning and make this space yours!</p>
    </div>
  );
};

export { Spiner };
