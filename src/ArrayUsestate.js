
import React, { useState } from 'react';

const ArrayUsestate = () => {

    const bioData = [
        {id: 0, myName: "Ankit", age: 22},
        {id: 1, myName: "Deep", age: 23},
        {id: 2, myName: "Ram", age: 24},
    ];
    // console.log(bioData);

    const [myArray, setmyArray] = useState(bioData);

    const clearArray = () => {
      setmyArray([]);   // empty kar diya data ko.
    }

    const removeElem = (id) => {
      // alert(id);  
      const myNewArray = myArray.filter((curElm) => {
        return curElm.id !== id;
      })
      setmyArray(myNewArray);
    }

  return (
    <>
    {
        myArray.map((curElm) => {
            return <h1 key={curElm.id}>Name: {curElm.myName} & Age: {curElm.age}
            <button onClick={ () => removeElem(curElm.id)}> Remove </button>
            </h1>
          })
    }
    <button onClick={clearArray}>Clear</button>
    </>
  )
}

export default ArrayUsestate
