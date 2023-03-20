import React, { useState } from 'react'

const ShortCircuitEval = () => {
    const [demo, setDemo] = useState("");
  return (
    <div>
      <h1>{ demo || "Ankit" }</h1>
      <h1>{ demo && "Rajput"}</h1>
    </div>
  )
}
// && array ka data hota hai to componets <ArrayUsestate/>
//  me ye dikhao, barna na dikhao

export default ShortCircuitEval
