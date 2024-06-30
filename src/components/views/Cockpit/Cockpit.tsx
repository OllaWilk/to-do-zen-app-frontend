import React from 'react';
import { ControlPanel, EventsList } from '../../layout';
import {
  SectionCart,
  SectionHeader,
  EventForm,
  UserPanel,
  SearchBar,
  Map,
} from '../../common';
import style from './Cockpit.module.scss';

export const Cockpit = () => {
  return (
    <SectionCart>
      <SectionHeader text={'Things to do <sup>yay!</sup>'} />
      <div className={style.search}>
        <SearchBar />
      </div>
      <Map />
      <EventsList />
      <ControlPanel>
        <UserPanel />
        <EventForm />
      </ControlPanel>
    </SectionCart>
  );
};
