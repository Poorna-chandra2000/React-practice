import React, { useState } from 'react';
import List from './List';

const TodoList = () => {
  let [items, setItems] = useState([{ id: 1, data: "item1" }]);
  let [newItem, setNewItem] = useState("");
  let [editItemId, setEditItemId] = useState(null);
  let [editText, setEditText] = useState("");

  // Delete item
  const deleteItem = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  };

  // Update item (start edit)
  const startEdit = (id, currentText) => {
    setEditItemId(id);
    setEditText(currentText);
  };

  // Submit update
  const submitEdit = () => {
    const updatedItems = items.map(item => 
      item.id === editItemId ? { ...item, data: editText } : item
    );
    setItems(updatedItems);
    setEditItemId(null); // Reset edit mode
    setEditText(""); // Reset edit text
  };

  return (
    <div>
      <h2>TODOLIST</h2>
      <ul>
        {
          items.map(item => (
            <List 
              key={item.id} 
              data={item.data}
              deleteItem={() => deleteItem(item.id)} 
              startEdit={() => startEdit(item.id, item.data)}
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
        let newvalue = { id: items.length + 1, data: newItem };
        setItems([...items, newvalue]);
        setNewItem(""); // Reset input field
      }} 
      className='w-fit text-pretty font-mono text-2xl bg-violet-600 px-1 mt-4 ml-3 rounded-lg text-white shadow-md shadow-black'>
        add custom text
      </button>

      <button onClick={() => {
        let newvalue = { id: items.length + 1, data: `items${items.length + 1}` };
        setItems([...items, newvalue]);
      }} 
      className='w-fit text-pretty font-mono text-2xl bg-violet-600 px-1 mt-4 ml-3 rounded-lg text-white shadow-md shadow-black'>
        add
      </button>

      {/* Edit input for updating an item */}
      {editItemId && (
        <div>
          <input 
            type="text" 
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            placeholder="Edit item text" 
          />
          <button onClick={submitEdit}>Submit Edit</button>
        </div>
      )}
    </div>
  );
};

export default TodoList;
