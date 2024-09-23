import React from 'react';
import { CvList } from '../../../layout';
import { educationData } from '../../../../i18n';

const EducationSection = () => {
  return (
    <>
      <h3>Education</h3>
      <CvList entries={educationData} />
    </>
  );
};

export { EducationSection };
