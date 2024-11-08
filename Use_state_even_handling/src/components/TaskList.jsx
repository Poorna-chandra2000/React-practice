import React, { useState } from 'react';

// Combine all tasks into a single array
const tasksArray = [
  { id: 1, name: "Task 1" },
  { id: 2, name: "Task 2" },
  { id: 3, name: "Task 3" }
];

function TaskList() {
  // Initialize state with the array of tasks
  const [tasks, setTasks] = useState(tasksArray);

  const addTask = () => {
    const newTask = { id: tasks.length + 1, name: `Task ${tasks.length + 1}` };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  return (
    <div>
      <h1>Tasks:</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}

export default TaskList;
