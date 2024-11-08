import React from 'react';

import { useForm } from 'react-hook-form';


const ReactFormDemo = () => {
  const {register,handleSubmit}=useForm();//syntax

  //below add register to each input and give a name
  //now when you give input it will store and give each input as 
  //as an object al together
  return (
    <div>
      
      <form action="" onSubmit={handleSubmit(data=>console.log(data))}>
        <input {...register('name')} type="text" placeholder='name'/>
        <input {...register('email')} type="email" placeholder='emails' />
        <input  type="submit" name="" id="" />
     </form>
    </div>
  )
}

export default ReactFormDemo
