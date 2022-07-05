 import React from 'react';


export function End(props) {
  const { time } = props;
   return (
     <div className='end'>
      <p id="game_over">Game Over,</p>
         <p id="time_spent">you spent {Date.now() - time} ms. </p>
     </div>
   );
 }
