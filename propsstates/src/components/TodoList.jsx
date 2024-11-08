import React, { useState } from 'react';
import List from './List';




const TodoList = () => {
    let [items,setItems]=useState([{id:1,data:"item1"}]);
let [newItem,setNewItem]=useState("");
  return (
    <div>
      <h2>TODOLIST</h2>
      <ul>
      {
        items.map(item=>(
          <List key={item.id} data={item.data}/>
        ))
      }
      </ul>
      
      <input
       type="text" 
       value={newItem}
       onChange={(e)=>{
       // e.preventDefault
        setNewItem(e.target.value)}}
       placeholder="Enter new item" />

       
      
    <button onClick={()=>{
       
          let newvalue={id:items.length+1,data:`${newItem}`}
            setItems([...items,newvalue])
    }} 
    
    className='w-fit text-pretty font-mono text-2xl bg-violet-600 px-1 mt-4 ml-3 rounded-lg text-white shadow-md shadow-black'>
    add custom text</button>

        <button onClick={()=>{
       
       let newvalue={id:items.length+1,data:`items${items.length+1}`}
         setItems([...items,newvalue])
       }} 
 
       className='w-fit text-pretty font-mono text-2xl bg-violet-600 px-1 mt-4 ml-3 rounded-lg text-white shadow-md shadow-black'>
     add</button>

    </div>
  )
}

export default TodoList
