import React, { useState } from 'react';

const Multistate = () => {
    const [formdata,setform]=useState({
        Name:"",
        Email:"",
        Password:""
    })

    const recieveData = (e) => {
        e.preventDefault();
        const { Name, Email, Password } = formdata;
        console.log(Name);
        console.log(Email);
        console.log(Password);
    };

    //now each input keep a varaibel name which represent each parameter in the object
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
        <h1>Form(one state handling many states)</h1>
        <form onSubmit={recieveData}  className="flex flex-col gap-5">
        <input className="text-white border-spacing-3 rounded-3xl text-center border-[0.3em]  border-violet-700 bg-slate-200  p-1"  
        type="text"
        name="Name"
        id="" 
        value={formdata.Name}

        onChange={(e)=>setform({...formdata,Name:e.target.value})}
        placeholder='enter your name'
        />

      <input className="text-white border-spacing-3 border-[0.3em] rounded-3xl text-center border-violet-700 bg-slate-200 p-1" 
      type="email" 
      name="Email" 
      id="" 
      value={formdata.Email}
      onChange={(e)=>setform({...formdata,Email:e.target.value})}
      placeholder='enter your email'
      />

      <input className="text-white border-spacing-3 border-[0.3em] rounded-3xl text-center border-violet-700 bg-slate-200 p-1" 
      type="password" 
      name="Password" 
      id="" 
      value={formdata.Password}
      onChange={(e)=>setform({...formdata,Password:e.target.value})}
      placeholder='enter your password'
      />

      <button  className="bg-black p-1 text-white rounded-3xl"  type="submit">submit</button>
        </form>
      
    </div>
  )
}

export default Multistate
