
// Part B =>  Toggle Data.. 
import { useState } from "react";

const ToggalUsestate = () => {
    
    const [myName, setMyName] = useState('Audacious Technologies')

    const changeName = () => {
        let val = myName;

        if (val === 'Audacious Technologies') {
            setMyName ('Software - Company');
        }else {
            setMyName ('Audacious Technologies');
        }
    }
    console.log(myName);

    return (
        <div>
            <h1> {myName} </h1>
            <button onClick={changeName}> click me plz Toggle Data </button>
        </div>
    )
}

export default ToggalUsestate;