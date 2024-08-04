import React from 'react';

import { useToggle } from '../../../utils/hooks/useToggle';
import { ControlPanel, EventsList, LeftSidePanel } from '../../layout';
import {
  SectionCart,
  SectionHeader,
  EventForm,
  SortBar,
  UserPanel,
  SearchBar,
  Map,
  ButtonBlack,
} from '../../common';
import style from './Cockpit.module.scss';

export const Cockpit = () => {
  const [isOpen, toggleIsOpen] = useToggle(true);

  return (
    <SectionCart>
      <LeftSidePanel>
        <SectionHeader text={'Things to do <sup>yay!</sup>'} />
        <div className={style.wrapper}>
          <ButtonBlack
            buttonName={isOpen ? 'Add event' : 'close form'}
            styles={{ minWidth: '100px', width: '250px' }}
            onClick={toggleIsOpen}
          />
          <SearchBar />
        </div>
        <SortBar />
        <EventsList />
        <div
          className={`${style.controlPanel} ${
            isOpen ? style.toggleHorizontal : style.showForm
          }`}
        >
          <p onClick={toggleIsOpen} className={style.close}>
            x
          </p>
          <EventForm />
        </div>
      </LeftSidePanel>
      <ControlPanel>
        <UserPanel />
        <Map />
        <div
          className={`${style.hide} ${
            isOpen ? style.toggleHorizontal : style.showForm
          }`}
        >
          <p onClick={toggleIsOpen} className={style.close}>
            x
          </p>
          <EventForm />
        </div>
      </ControlPanel>
    </SectionCart>
  );
};
