import React, { useState } from 'react';

export function CounterApp() {
  // Declare a state variable 'count' with initial value 0
  const [count, setCount] = useState(0);
  const increase = ()=> setCount(count+1);
  const reset = () => setCount(0);
  return {count, increase, reset};
}