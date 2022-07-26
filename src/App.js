import { React, useState } from 'react';
import {Start} from "./components/Start";
import {Game} from "./components/Game";
import {End} from "./components/End";


export const App = () => {
    const [display, setDisplay] = useState(0);
    const [round, setRound] = useState('3'); 
    const [time, setTime] = useState(null);

  
    return (
        <div>
            
            {display === 0 && <Start setDisplay = {setDisplay} round = {round} setRound = {setRound} setTime={setTime}/>}

            {display === 1 && <Game setDisplay = {setDisplay} round = {round} setRound = {setRound} />}
        
            {display === 2 && <End setDisplay = {setDisplay} time = {time} />}
        </div>
    );
    

};

