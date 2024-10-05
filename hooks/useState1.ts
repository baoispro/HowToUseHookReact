import React, { useState } from 'react';

export function DiceRollApp() {
  // Declare a state variable 'count' with initial value 0
  const randomDiceRoll = ()=> Math.floor(Math.random()*6)+1
  const [diceRolls, setDiceRolls] = useState<number[]>([]);
  const roll = ()=> setDiceRolls([...diceRolls, randomDiceRoll()]);
  return {diceRolls, roll};
}