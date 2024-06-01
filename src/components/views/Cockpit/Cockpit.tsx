import React from 'react';
import { ControlPanel, EventsList } from '../../layout';
import { SectionCart, SectionHeader, EventForm, UserPanel } from '../../common';

const Cockpit = () => {
  return (
    <SectionCart>
      <SectionHeader text={'Things to do <sup>yay!</sup>'} />
      <EventsList />
      <ControlPanel>
        <UserPanel />
        <EventForm />
      </ControlPanel>
    </SectionCart>
  );
};

export { Cockpit };
