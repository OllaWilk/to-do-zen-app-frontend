import React from 'react';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { Paragraph } from '../Paragraph/Paragraph';
import styles from './CartWithParagraphs.module.scss';

interface Props {
  cart: {
    title: string;
    paragraph: string[];
  };
  isVisible: boolean;
}
const CartWithParagraphs = ({ cart, isVisible }: Props) => {
  return (
    <div className={isVisible ? styles.textWrap : styles.hidden}>
      <SectionHeader text={cart.title} />
      {cart.paragraph.map((paragraph, idx) => (
        <div key={idx + cart.title}>
          <Paragraph text={paragraph} />
        </div>
      ))}
    </div>
  );
};

export { CartWithParagraphs };
