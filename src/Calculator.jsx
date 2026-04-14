import React, { useState } from "react";

function Calculator() {
  const [value, setValue] = useState("");

  const handleClick = (val) => {
    setValue((prev) => prev + val);
  };

  const clearAll = () => setValue("");

  const calculate = () => {
    try {
      setValue(eval(value).toString());
    } catch {
      setValue("Error");
    }
  };

  return (
    <>
    <h4>*7) Built a <b><i><u>Calculator</u> in React*</i></b></h4>    
    <div className="calc-container">
      <h1 className="calc-title">Calculator</h1>

      <div className="calc-display">
        {value || "0"}
      </div>

      <div className="calc-buttons">

        {/* Row 1 */}
        <button className="btn-ac" onClick={clearAll}>AC</button>
        <button className="btn-op" onClick={() => handleClick("/")}>÷</button>
        <button className="btn-op" onClick={() => handleClick("*")}>×</button>
        <button className="btn-op" onClick={() => handleClick("-")}>−</button>

        {/* Row 2 */}
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button className="btn-op" onClick={() => handleClick("+")}>+</button>

        {/* Row 3 */}
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick(")")}>)</button>
        

        {/* Row 4 */}
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("(")}>(</button>
        

        {/* Row 5 (perfect symmetry) */}
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick("00")}>00</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button className="btn-equal" onClick={calculate}>=</button>

      </div>
    </div>
  </>);
}

export default Calculator;