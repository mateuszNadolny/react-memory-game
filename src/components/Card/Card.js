import React from 'react';
import styles from './Card.module.css';

const Card = ({ card }) => {
  return (
    <div className={styles.card}>
      <img src={card.src} alt="memory image" />
    </div>
  );
};

export default Card;
