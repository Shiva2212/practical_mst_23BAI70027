import React, { useState } from "react";

function Counter(){

  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment = () => {
    if(count < 100){
      setCount(count + step);
    }
  };

  const decrement = () => {
    if(count > 0){
      setCount(count - step);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return(

    <div>

      <h2 style={{fontSize:"45px"}}>{count}</h2>

      <div style={{marginBottom:"15px"}}>

        <label>Step: </label>

        <select
          value={step}
          onChange={(e)=>setStep(Number(e.target.value))}
        >
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>

      </div>

      <button
        onClick={increment}
        style={btnGreen}
      >
        Increment
      </button>

      <button
        onClick={decrement}
        style={btnRed}
      >
        Decrement
      </button>

      <button
        onClick={reset}
        style={btnGray}
      >
        Reset
      </button>

    </div>

  )
}

const btnGreen = {
  padding:"10px 15px",
  margin:"5px",
  background:"#4CAF50",
  color:"white",
  border:"none",
  borderRadius:"6px",
  cursor:"pointer"
};

const btnRed = {
  padding:"10px 15px",
  margin:"5px",
  background:"#f44336",
  color:"white",
  border:"none",
  borderRadius:"6px",
  cursor:"pointer"
};

const btnGray = {
  padding:"10px 15px",
  margin:"5px",
  background:"#555",
  color:"white",
  border:"none",
  borderRadius:"6px",
  cursor:"pointer"
};

export default Counter;