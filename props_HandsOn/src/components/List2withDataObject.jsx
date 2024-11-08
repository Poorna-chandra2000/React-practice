import React from 'react'

const List2withDataObject = (props) => {
  return (
    <div>
    <h1 className='bg-red-300 p-1 w-[10em]'><span>Animal:</span>{props.category!=="tiger"?props.name : "dog is innocent"} <span>Category:</span> {props.category}</h1>
  </div>
  )
}

export default List2withDataObject
