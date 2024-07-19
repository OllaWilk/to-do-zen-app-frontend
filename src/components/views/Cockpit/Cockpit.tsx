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
        <SearchBar />
        <SortBar />
        <EventsList />
      </LeftSidePanel>
      <ControlPanel>
        <UserPanel />
        <div
          className={!isOpen ? `${style.none}` : `${style.buttonAdd}`}
          onClick={toggleIsOpen}
        >
          <ButtonBlack buttonName={'Add event'} styles={{ width: '100%' }} />
        </div>
        <Map />
        <div
          className={
            !isOpen
              ? `${style.showForm} ${style.controlPanel}`
              : `${style.controlPanel} ${style.toggleHorizontal}`
          }
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
