import './Dice.css'
import React, { useState } from 'react';

export default function Dice() {
  const [numberOfDice, setNumberOfDice] = useState(6);
  const [diceElements, setDiceElements] = useState([]);

  const dotPositionMatrix = {
    1: [[50, 50]],
    2: [[20, 20], [80, 80]],
    3: [[20, 20], [50, 50], [80, 80]],
    4: [[20, 20], [20, 80], [80, 20], [80, 80]],
    5: [[20, 20], [20, 80], [50, 50], [80, 20], [80, 80]],
    6: [[20, 20], [20, 80], [50, 20], [50, 80], [80, 20], [80, 80]],
  };

  const createDice = (number) => {
    const dots = dotPositionMatrix[number].map((dotPosition, index) => {
      const style = {
        "--top": `${dotPosition[0]}%`,
        "--left": `${dotPosition[1]}%`,
      };
      return <div key={index} className="dice-dot" style={style}></div>;
    });
    return <div className="dice">{dots}</div>;
  };

  const randomizeDice = () => {
    const diceElements = [];
    for (let i = 0; i < numberOfDice; i++) {
      const random = Math.floor(Math.random() * 6) + 1;
      diceElements.push(createDice(random));
    }
    setDiceElements(diceElements);
  };

  const handleRollDice = () => {
    const interval = setInterval(randomizeDice, 50);
    setTimeout(() => clearInterval(interval), 1000);
  };

  return (
    <div className="container">
      <h2>Dice Roll Game</h2>
      <div className="dice-container">
        <button id="roll_them" type="button" className="btn-roll-dice" onClick={handleRollDice}>
          Roll 🎲 Dice
        </button>
        <div className="dice-container">{diceElements}</div>           
      </div>      
    </div>

    
  )
}





/*
  return (
    <div className="container">
      <div className="dice-container">
        <h2>🎲</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui provident consequuntur vel omnis quisquam rem harum, maxime expedita, ullam ut dolore! Distinctio eos minima voluptatum totam id hic! Sapiente debitis quia illum officia obcaecati provident nulla odio molestiae suscipit quasi.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui provident consequuntur vel omnis quisquam rem harum, maxime expedita, ullam ut dolore! Distinctio eos minima voluptatum totam id hic! Sapiente debitis quia illum officia obcaecati provident nulla odio molestiae suscipit quasi.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui provident consequuntur vel omnis quisquam rem harum, maxime expedita, ullam ut dolore! Distinctio eos minima voluptatum totam id hic! Sapiente debitis quia illum officia obcaecati provident nulla odio molestiae suscipit quasi.</p>
      </div>      
    </div>
  )
*/