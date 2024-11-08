import React, { useState } from 'react';
import List from './List';

const TodoList = () => {
  let [items, setItems] = useState([{ data: "Task 1:",taskname:"your first" }]);
  let [newItem, setNewItem] = useState("");
  let [editIndex, setEditIndex] = useState(null);
  let [editText, setEditText] = useState("");
  let [search, setsearchText] = useState("");

  // Delete item
  const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  //Search
   // Search function: filter items based on search text (this won't modify `items`)
   const filteredItems = items.filter((item) => 
    item.data.toLowerCase().includes(search.toLowerCase())||
   item.taskname.toLowerCase().includes(search.toLowerCase())
  );


  // Update item (start edit)
  const startEdit = (index, currentText) => {
    setEditIndex(index);
    setEditText(currentText);
  };

  // Submit update
  const submitEdit = () => {
    const updatedItems = items.map((item, index) => 
      index === editIndex ? { data: editText } : item
    );
    setItems(updatedItems);
    setEditIndex(null); // Reset edit mode
    setEditText(""); // Reset edit text
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <h2 className="text-purple-600 font-mono text-4xl stroke-black m-4">TODOLIST</h2>




{/* this input is for searching */}
      <input className=" flex border-2 rounded-md placeholder-cyan-900 justify-center h-10 mix-blend-luminosity mb-5 "
       type="text" 
       value={search} 
       onChange={(e)=>setsearchText(e.target.value)} 
       placeholder='search..'
      />




      {/* <ul>
        {
          items.map((item, index) => (
            <List 
              key={index} 
              data={item.data} 
              deleteItem={() => deleteItem(index)} 
              startEdit={() => startEdit(index, item.data)
              }
            />
          ))
        }
      </ul> */}
      

 {/* Use filteredItems to display the results and also for adding*/}
 <ul>
        {
          filteredItems.map((item, index) => (
            <List 
              key={index} 
              data={item.data} 
              taskname={item.taskname}
              deleteItem={() => deleteItem(index)} 
              startEdit={() => startEdit(index, item.data)}
            />
          ))
        }
      </ul>

      {/* Input for adding new item */}
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Enter new item"
      />

      <button onClick={() => {
        let newvalue = { data: `Task ${items.length+1}:`,taskname:newItem };
        setItems([...items, newvalue]);
        setNewItem(""); // Reset input field
      }} 
      className='w-fit text-pretty font-mono text-2xl bg-violet-600 px-1 mt-4 ml-3 rounded-lg text-white shadow-md shadow-black'>
        add custom text
      </button>

      <button onClick={() => {
        let newvalue = { data: `Task ${items.length + 1}:` };
        setItems([...items, newvalue]);
      }} 
      className='w-fit text-pretty font-mono text-2xl bg-violet-600 px-1 mt-4 ml-3 rounded-lg text-white shadow-md shadow-black'>
        add
      </button>

      {/* Edit input for updating an item */}
      {editIndex !== null && (
        <div>
          <input 
            type="text" 
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            placeholder="Edit item text" 

            className="border-blue-500"
          />
          <button className="ml-2 p-1 shadow-md shadow-black" onClick={submitEdit}>Submit Edit</button>
        </div>
      )}
    </div>
  );
};

export default TodoList;
