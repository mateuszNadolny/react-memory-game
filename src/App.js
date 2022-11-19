import { useState } from 'react';

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

  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...initialCards, ...initialCards]
      .sort(() => Math.random() - 0.5)
      .map((card) => (card = { ...card, id: Math.random(), matched: false }));
    setCards(shuffledCards);
  };

  return (
    <>
      <h1>React memory game</h1>
      <div className="memory-grid">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
      <button onClick={shuffleCards}>Start game</button>
    </>
  );
}
