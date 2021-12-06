import React, { useState } from "react";
import "./App.css";
// import Header from "./Component/Header";

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.value));
  };
  const clear = () => {
    setResult(" ");
  };
  const backspace = () => {
    setResult(result.slice(0, -1));
  };
  const calculate = () => {
    setResult(eval(result).toString());
  };
  return (
    <div className="App">
      <div className="container">
        <span>Calculator</span>
        <input type="text" className="input_box" value={result} />
        <div className="buttons">
          <button className="clear" onclick={clear} id="clear">
            clear
          </button>
          <button value="7" onClick={handleClick}>
            7
          </button>
          <button value="8" onClick={handleClick}>
            8
          </button>
          <button value="9" onClick={handleClick}>
            9
          </button>
          <button onClick={backspace} id="backspace">
            c
          </button>
          <button value="/" onClick={handleClick}>
            /
          </button>
          <tr />

          <button value="4" onClick={handleClick}>
            4
          </button>
          <button value="5" onClick={handleClick}>
            5
          </button>
          <button value="6" onClick={handleClick}>
            6
          </button>
          <button value="*" onClick={handleClick}>
            *
          </button>
          <button value="-" onClick={handleClick}>
            -
          </button>
          <button value="1" onClick={handleClick}>
            1
          </button>
          <button value="2" onClick={handleClick}>
            2
          </button>
          <button value="3" onClick={handleClick}>
            3
          </button>
          <button value="+" onClick={handleClick}>
            +
          </button>
          <button value="." onClick={handleClick}>
            .
          </button>
          <button value="0" onClick={handleClick}>
            0
          </button>
          <button value="=" onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
