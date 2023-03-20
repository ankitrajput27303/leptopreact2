
// Part A => 
import { useState } from "react";

const Usestate = () => {
    // console.log(useState);
    // console.log(useState());
    // console.log(useState('Ankit Rajput'));

    // let val = 'Ankit Rajput';

    const [myName, setMyName] = useState('Audacious Technologies')

    const changeName = () => {
        // val = "Rajput Ankit";
        // console.log(val);

        setMyName('Software - Company');
    }
    // console.log(val);

    console.log(myName);

    return (
        <div>
            <h1> {myName} </h1>
            <button onClick={changeName}> click me plz </button>
        </div>
    )
}

export default Usestate;