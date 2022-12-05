import React, { useState } from 'react';
import styles from './Card.module.css';

const Card = ({ card, onChoice, flipped, disabled }) => {
  // flipping the cards after start of the game so the user can see the cards for a short amount of time at the beginning of the game
  const [gameStarted, setGameStarted] = useState(false);
  setTimeout(() => setGameStarted(true), 2000);

  const handleChoice = () => {
    if (!disabled) {
      onChoice(card);
    }
  };

  return (
    <div className={styles.card} onClick={handleChoice}>
      {gameStarted && <div className={flipped ? '' : styles.cover}></div>}
      <img src={card.src} alt="memory image" />
    </div>
  );
};

export default Card;
