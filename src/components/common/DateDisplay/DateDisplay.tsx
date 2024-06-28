import React from 'react';

interface DateDisplayProps {
  date: Date;
}

export const DateDisplay: React.FC<DateDisplayProps> = ({ date }) => {
  const dateObject = new Date(date);

  const formattedDate = dateObject.toLocaleDateString('en-En', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return <div>{formattedDate}</div>;
};
