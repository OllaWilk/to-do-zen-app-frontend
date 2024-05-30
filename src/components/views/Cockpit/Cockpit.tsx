import React from 'react';
import { EventsList } from '../../layout';
import { SectionCart, SectionHeader } from '../../common';

const Cockpit = () => {
  return (
    <SectionCart>
      <SectionHeader text={'Things to do <sup>yay!</sup>'} />
      <EventsList />
    </SectionCart>
  );
};

export { Cockpit };
