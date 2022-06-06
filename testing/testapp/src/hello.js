import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Hello() {
    const [counter,setCounter]=useState(0);
  return (
    <div className="App">
     
     <p data-testid="counter"> {counter}</p>
     <button data-testid="button-up" onClick={() => setCounter(counter + 2)}> Up</button>
    </div>
  );
}

export default Hello;
