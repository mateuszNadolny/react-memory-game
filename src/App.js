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

  //reset turns
  const resetTurn = () => {
    setFirstChoice(null);
    setSecondChoice(null);
    console.log('RESET');
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
    console.log('choiceHandler fnction start');
    console.log(card);
    console.log('choiceHandler ends');
  };

  //compare selected cards
  useEffect(() => {
    if (firstChoice && secondChoice) {
      if (firstChoice.src === secondChoice.src && firstChoice.id !== secondChoice.id) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === firstChoice.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
      } else {
      }
      resetTurn();
    }
  }, [firstChoice, secondChoice]);

  return (
    <>
      <h1>React memory game</h1>
      <button onClick={shuffleCards}>Start game</button>
      <div className="memory-grid">
        {cards.map((card) => (
          <Card
            onChoice={choiceHandler}
            key={card.id}
            card={card}
            flipped={card === firstChoice || card === secondChoice || card.matched}
          />
        ))}
      </div>
    </>
  );
}
