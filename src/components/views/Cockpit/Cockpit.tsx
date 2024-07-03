import React from 'react';
import { useToggle } from '../../../utils/hooks/useToggle';
import { ControlPanel, EventsList } from '../../layout';
import {
  SectionCart,
  SectionHeader,
  EventForm,
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
      <SectionHeader text={'Things to do <sup>yay!</sup>'} />
      <div className={style.search}>
        <div className={style.buttonAdd} onClick={toggleIsOpen}>
          <ButtonBlack
            buttonName={isOpen ? 'Add event' : 'Show map'}
            styles={{ width: '100%' }}
          />
        </div>
        <SearchBar />
      </div>
      <EventsList />
      <ControlPanel>
        <UserPanel />
        <Map />
        <div
          className={
            isOpen
              ? style.openForm
              : `${style.controlPanel} ${style.toggleHorizontal}`
          }
        >
          <EventForm />
        </div>
      </ControlPanel>
    </SectionCart>
  );
};
