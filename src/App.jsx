import { useState, useRef } from 'react';
import { add, divide, multiply, subtract } from './utils/math';

function App() {
  const [counter, setCounter] = useState(2);
  const [result, setResult] = useState(0);
  // const inputARef = document.querySelector('#a');
  const inputARef = useRef(null);
  const inputBRef = useRef(null);

  const handleCounter = () => {
    setCounter(counter + 1);
  };

  const handleAdd = () => {
    // const a = intpuAref.value;
    console.log(inputARef.current);
    const a = Number(inputARef.current.value);
    const b = Number(inputBRef.current.value);
    setResult(add(a, b));
  };

  const handleMultiply = () => {
    // const a = intpuAref.value;
    console.log(inputARef.current);
    const a = Number(inputARef.current.value);
    const b = Number(inputBRef.current.value);
    setResult(multiply(a, b));
  };

  const handleDivide = () => {
    // const a = intpuAref.value;
    console.log(inputARef.current);
    const a = Number(inputARef.current.value);
    const b = Number(inputBRef.current.value);
    setResult(divide(a, b));
  };

  const handleSubtract = () => {
    // const a = intpuAref.value;
    console.log(inputARef.current);
    const a = Number(inputARef.current.value);
    const b = Number(inputBRef.current.value);
    setResult(subtract(a, b));
  };

  return (
    <div className="container">
      <h1>Counter: {counter}</h1>
      <button type="button" onClick={handleCounter}>
        count
      </button>

      <div>
        <h1>Calculator</h1>
        <input type="number" name="a" ref={inputARef} />
        <input type="number" name="b" ref={inputBRef} />
        <button type="button" onClick={handleAdd}>
          Add
        </button>
        <button type="button" onClick={handleMultiply}>
          Multiply
        </button>
        <button type="button" onClick={handleDivide}>
          Divide
        </button>
        <button type="button" onClick={handleSubtract}>
          Subtract
        </button>
        <h2>Result: {result}</h2>
      </div>
    </div>
  );
}

export default App;
