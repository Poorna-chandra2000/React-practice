import React from 'react';

// eslint-disable-next-line react/prop-types
  
 
  // eslint-disable-next-line react/prop-types
  const Card = ({users,handleDeleteGetIndex,search,setupdateUserIdex}) => {
    // eslint-disable-next-line react/prop-types
    const filteredUsers=users.filter((items)=>items.name.toLowerCase().includes(search.toLowerCase()) || items.email.toLowerCase().includes(search.toLowerCase()) );

  return (
    <>
    {filteredUsers.map((items,index)=>{
        const {name,email,image}=items;
              // eslint-disable-next-line react/jsx-key
              return <div   key={index} className='min-w-6  min-h-52 bg-white  shadow-violet-400/40 shadow-sm rounded-lg flex flex-col items-center justify-center text-center py-2 px-2'>
                  <div className='image w-20  h-20 rounded-full bg-blue-200 overflow-hidden'>
                    <img className='object-cover bg-blue-200 w-full h-full' 
                    src={image} alt={image} />
                  </div>
                <h1 className='text-2xl leading-7 p-0 m-0 text-fuchsia-950 text-pretty from-neutral-700 font-bold font-inter'>{name}</h1>
                <h2 className='text-xs text-zinc-600'>{email}</h2>
                <p className='mt-2 leading-0  text-[0.8em] tracking-tight font-poppins text-pretty mt-1'>Lorem ipsum dolor sit amet.</p>
                <button onClick={()=>handleDeleteGetIndex(index)} className='shadow-xl justify-items-end mt-2 shadow-slate-500/40 bg-amber-500 text-amber-50 px-3 rounded-lg font-mono'>Delete</button>
                <button onClick={()=>setupdateUserIdex(index)} className='shadow-xl justify-items-end mt-2 shadow-slate-500/40 bg-amber-500 text-amber-50 px-3 rounded-lg font-mono'>Update</button>
              </div>
    })
    }
    </>
   
  )
}

export default Card
