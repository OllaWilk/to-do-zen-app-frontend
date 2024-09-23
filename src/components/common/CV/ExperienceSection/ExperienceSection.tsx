import React from 'react';
import { workExpData } from '../../../../i18n';
import { CvList } from '../../../layout';

const ExperienceSection = () => (
  <>
    <h3>Work Experience</h3>
    <CvList entries={workExpData} />
  </>
);

export { ExperienceSection };
