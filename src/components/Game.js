import React, { useState, useEffect } from "react";

export const Game = (props) => {
  const {round, setDisplay} = props;
    const [val1, setVal1] = useState('');
    const [val2, setVal2] = useState('');
    const [sum, setSum] = useState('');
    const [count, setCount] = useState(1);

   { 
    useEffect(() => mathExpression(),[]);

    const mathExpression = () => {
      setVal1(Math.floor(Math.random() * 20));
      setVal2(Math.floor(Math.random() * 20));  
    };

    const signs = ["+", "-", "/", "*"];

    const getOperation = (val1, val2, sign) => {
      switch (sign) {
        case "+":
          return val1 + val2;
        case "-":
          return val1 - val2;
        case "/":
          return val1 / val2;
        case "*":
          return val1 * val2;   
      }
    };


    const submit = (e) => {
        e.preventDefault();
        const formValid = sum >= 0;
        if (!formValid) {
          return;
        }
        
        if (+val1 + +val2 === +sum) {
          setCount((count) => count + 1);
        
          if (count == round) {
            setDisplay(2);
          }
          setSum('');
          mathExpression();
          
        }  
    };

      const handleClick = () => {
        setDisplay(0);
      };
  
  
    return (
      <div className="gameplay">
       <form onSubmit={submit}>
              <h2 className="math">{`${val1} +  ${val2}`}</h2>
              <input value={sum} onChange={(e) => setSum(e.target.value)} />
              <button type="submit">Play</button>
        </form> 
        <button id="start" type="button" onClick={handleClick}>Home</button>
        </div>
    );
    }
  };
