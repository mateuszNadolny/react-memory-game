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
    </div>
  );
};

{
  /* <div className={card.flipped ? styles.coverFlipped : styles.cover} onClick={handleChoice}></div>; */
}

export default Card;
