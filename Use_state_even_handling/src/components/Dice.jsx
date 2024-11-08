import React, { useState } from 'react';
//whtever is there in public folder can be accessed directly
//to images public just use /dice1 like this


function Dice() {

    const [dicenumber,genRandom]=useState(1);//always initial is 1


  return (
    <>
    <div className="p-6 flex items-center justify-center">
        <img className="h-[12em] w-[12em] rounded-3xl mix-blend-color-burn" src={`/dice${dicenumber}.png`} alt={`${dicenumber}`} />
    </div>

    <button onClick={()=>(genRandom((prev)=>prev=Math.floor(Math.random() * (6 - 1 + 1)) + 1))} className="text-emerald-300 stroke-black p-4 rounded-tl-3xl rounded-br-3xl text-3xl hover:bg-green-600 border-4 border-green-400">roll</button>
    </>
    
  )
}

export default Dice
