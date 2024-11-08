import React from 'react'

const List = ({data}) => {
  return (
   
      <li className='w-fit h-fit p-2 text-pink-600 rounded-3xl text-wrap mb-3 font-mono flex ml-2 bg-purple-300 text-3xl'>{data}

      <button  className='text-pink-100 text-xl px-1 ml-1 py-1 shadow-purple-800 shadow-md bg-pink-500 text-pretty rounded-xl shadow-inner bg-blend-color-burn shadow-2xl '>delete</button>
      <button className='text-pink-100 text-xl px-1 ml-1 py-1 shadow-purple-800 shadow-md bg-pink-500 rounded-xl shadow-inner bg-blend-color-burn shadow-2xl '>update</button>
      </li>

  )
}

export default List
