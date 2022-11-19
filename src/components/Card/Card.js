import React from 'react';
import styles from './Card.module.css';

const Card = ({ card, onChoice }) => {
  const hideCards = () => {};

  const handleChoice = () => {
    onChoice(card);
  };

  return (
    <div className={styles.card}>
      <img src={card.src} alt="memory image" onClick={handleChoice} />
      <div className={styles.cover}></div>
    </div>
  );
};

export default Card;
