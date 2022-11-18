import React from 'react';

import styles from './App.module.css';

const initialCards = [
  {'color': '#fcd303' }
  {'color': '#c93204' }
  {'color': '#53c904' }
  {'color': '#4cd4ad' }
  {'color': '#26e7eb' }
  {'color': '#eb26eb' }
]

export default function App() {

  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...initialCards, ...initialCards]
    .sort(() => Math.random() - 0.5)
    .map((card) => card = {...card, id: Math.random(), matched: false})

    console.log(shuffledCards)
  }

  shuffleCards();

  return (
    <div>
      <h1>React memory game</h1>
    </div>
  );
}
