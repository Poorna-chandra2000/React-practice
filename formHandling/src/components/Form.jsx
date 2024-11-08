import React from 'react';
import { useForm } from 'react-hook-form';

// eslint-disable-next-line react/prop-types
const Form = ({handleFormSubmitData}) => {
    const {register,handleSubmit,reset}=useForm();



  return (
    <div className='mt-6 mb-6 flex justify-center justify-center items-center'>

       <form action="" onSubmit={handleSubmit(data=>{handleFormSubmitData(data); reset();})} className='flex gap-10 flex-wrap  justify-center'>
           <input {...register('name')}  required type="text" className='rounded-md py-2 px-1 text-base font-semibold outline-teal-700' placeholder='name' />
           <input {...register('email')} required  type="text" className='rounded-md py-2 px-1 text-base font-semibold outline-teal-700' placeholder='email' />
           <input {...register('image')}  required type="text" className='rounded-md py-2 px-1 text-base font-semibold outline-teal-700' placeholder='image url' />
           
           <input type="submit" 
           value="submit" 
           className='py-2 px-2 font-mono shadow-green-600/25 shadow-xl w-fit h-fit rounded-md text-balance font-semibold bg-emerald-400 text-teal-50 hover:bg-teal-600'/>
       </form>
    </div>
  )
}

export default Form
