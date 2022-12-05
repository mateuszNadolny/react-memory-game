import { useEffect, useState } from 'react';

import Card from './components/Card/Card';

import './index.css';

const initialCards = [
  { src: '/assets/cat.png' },
  { src: '/assets/dog.webp' },
  { src: '/assets/duck.webp' },
  { src: '/assets/kiwi.jpg' },
  { src: '/assets/moose.jpg' },
  { src: '/assets/squirrel.webp' }
];

export default function App() {
  const [cards, setCards] = useState([]);
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);
  const [disabled, setDisabled] = useState(false);

  //reset turns
  const resetTurn = () => {
    setFirstChoice(null);
    setSecondChoice(null);
    setDisabled(false);
  };

  //shuffle cards
  const shuffleCards = () => {
    resetTurn();
    const shuffledCards = [...initialCards, ...initialCards]
      .sort(() => Math.random() - 0.5)
      .map((card) => (card = { ...card, id: Math.random(), matched: false }));
    setCards(shuffledCards);
  };

  //handle choice
  const choiceHandler = (card) => {
    firstChoice ? setSecondChoice(card) : setFirstChoice(card);
  };

  //compare selected cards
  useEffect(() => {
    if (firstChoice && secondChoice) {
      setDisabled(true);
      if (firstChoice.src === secondChoice.src && firstChoice.id !== secondChoice.id) {
        console.log('cards match');
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === firstChoice.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [firstChoice, secondChoice]);

  return (
    <>
      <h1>React memory game</h1>
      <button onClick={shuffleCards}>New game</button>
      <div className="memory-grid">
        {cards.map((card) => (
          <Card
            onChoice={choiceHandler}
            key={card.id}
            card={card}
            flipped={card === firstChoice || card === secondChoice || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
    </>
  );
}
