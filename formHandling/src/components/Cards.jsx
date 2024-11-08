import React from 'react'
import Card from './Card'
// eslint-disable-next-line react/prop-types
const Cards = ({users,handleDeleteGetIndex,search,setupdateUserIdex}) => {
  return (
    <div className='w-full  p-2 flex justify-center flex-wrap gap-3'>
      <Card users={users} search={search} handleDeleteGetIndex={handleDeleteGetIndex} setupdateUserIdex={setupdateUserIdex}/>
    </div>
  )
}

export default Cards
