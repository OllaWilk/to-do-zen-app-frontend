import React from 'react';
import { Paragraph, SectionHeader, Abstract } from '../index';
import styles from './CartWithParagraphs.module.scss';

interface Props {
  cart: {
    title?: string;
    abstract?: string;
    paragraph: string[];
  };
  isVisible: boolean;
}
const CartWithParagraphs = ({ cart, isVisible }: Props) => {
  const { title, abstract, paragraph } = cart;
  return (
    <div className={isVisible ? styles.textWrap : styles.hidden}>
      {title && <SectionHeader text={title} />}
      {abstract && <Abstract abstract={abstract} />}
      {paragraph.map((paragraph, idx) => (
        <div key={idx + 'title' + idx}>
          <Paragraph text={paragraph} />
        </div>
      ))}
    </div>
  );
};

export { CartWithParagraphs };
