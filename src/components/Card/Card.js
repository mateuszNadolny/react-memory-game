import React from 'react';
import styles from './Card.module.css';

const Card = ({ card, onChoice, flipped }) => {
  const handleChoice = () => {
    onChoice(card);
  };

  return (
    <div className={styles.card} onClick={handleChoice}>
      <div className={flipped ? '' : styles.cover}></div>
      <img src={card.src} alt="memory image" />
    </div>
  );
};

export default Card;
