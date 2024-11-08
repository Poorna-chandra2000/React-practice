import React, { useState } from 'react';

function UseStatess() {
  // The useState hook should be called inside the component function
  const[count,setCount]=useState(0);//0 is the strating value,if 10 count start from 10
  //you can also set he value to anynumber or any value and count starts from there
  
  //one more way parameterized simple yaar just like mapping
  //const[count,setCount]=useState(10);
  //onClick={()=>(setCount((prev)=>count+1))}
  const[right,setright]=useState(false);//false insisde usestate means initial start with false

  return (
    <>
    <div className="w-screen h-screen grid place-items-center bg-black ">
      <div className="w-1/4 h-1/4 bg-slate-100 flex flex-col justify-center items-center gap-4">
        <h2>{count}</h2>
        <button onClick={()=>(setCount(count+1))} className="w-fit h-fit p-1 rounded-xl text-blue-100 font-mono font-semibold bg-blue-700">Click to count</button>
      </div>
      <div className="w-1/4 h-1/4 bg-slate-100 flex flex-col justify-center items-center gap-4">
      <h1 className={`${right?"bg-purple-400":"bg-green-300"}`}>if true make it false,if false make it true</h1>
        <h2 className="">{right?"hello True":"hello false"}</h2>
        <button onClick={()=>(setright(!right))} className="w-fit h-fit p-1 rounded-xl text-blue-100 font-mono font-semibold bg-blue-700">True/False</button>
      </div>
    </div>
    </>
  );
}

export default UseStatess;
